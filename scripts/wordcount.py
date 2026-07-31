import re
import sys


def extract_object(text, slug):
    marker = f'slug: "{slug}"'
    idx = text.index(marker)
    start = text.rfind("{", 0, idx)
    depth = 0
    i = start
    while i < len(text):
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                return text[start : i + 1]
        i += 1
    raise ValueError("no matching brace found")


def strip_field(obj_text, field_name):
    """Remove a `field_name: [...]` array (balanced brackets) from obj_text."""
    pattern = re.compile(rf"{field_name}\s*:\s*\[")
    out = []
    pos = 0
    for m in pattern.finditer(obj_text):
        out.append(obj_text[pos : m.start()])
        depth = 1
        i = m.end()
        while i < len(obj_text) and depth > 0:
            if obj_text[i] == "[":
                depth += 1
            elif obj_text[i] == "]":
                depth -= 1
            i += 1
        pos = i
    out.append(obj_text[pos:])
    return "".join(out)


def extract_strings(text):
    strings = re.findall(r'"((?:[^"\\]|\\.)*)"', text)
    return strings


def word_count(strings):
    total = 0
    for s in strings:
        s = s.replace("\\n", " ")
        total += len(s.split())
    return total


def content_word_count(obj_text):
    # Remove fields that are not body content
    for field in ["keywords", "links", "title", "description", "h1", "cta", "category", "slug"]:
        obj_text = strip_field(obj_text, field)
    # strip simple string fields not wrapped in arrays (title/description/h1/cta may be plain strings)
    for field in ["title", "description", "h1", "cta", "category", "slug", "publishedAt", "updatedAt"]:
        obj_text = re.sub(rf'{field}\s*:\s*"(?:[^"\\]|\\.)*",?', "", obj_text)
    strings = extract_strings(obj_text)
    return word_count(strings)


if __name__ == "__main__":
    filepath = sys.argv[1]
    slugs = sys.argv[2:]
    with open(filepath, encoding="utf-8") as f:
        text = f.read()
    for slug in slugs:
        obj = extract_object(text, slug)
        wc = content_word_count(obj)
        print(f"{slug}: {wc} words")
