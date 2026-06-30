import zipfile
import xml.etree.ElementTree as ET
import sys
import os

def read_docx(path):
    try:
        with zipfile.ZipFile(path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.XML(xml_content)
            namespace = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            text = []
            for paragraph in tree.findall('.//w:p', namespace):
                texts = [node.text for node in paragraph.findall('.//w:t', namespace) if node.text]
                if texts:
                    text.append(''.join(texts))
            return '\n'.join(text)
    except Exception as e:
        return f"Error reading {path}: {e}"

if __name__ == '__main__':
    for arg in sys.argv[1:]:
        print(f"--- {arg} ---")
        print(read_docx(arg))
        print("\n")
