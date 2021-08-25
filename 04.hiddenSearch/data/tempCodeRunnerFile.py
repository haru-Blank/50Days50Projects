from typing import final
from bs4 import BeautifulSoup
import requests

link = 'https://emojiterra.com/flags/'
html_doc = requests.get(link).text

soup = BeautifulSoup(html_doc, 'lxml')

emojis = soup.select('.cat-emojis a')
countries = []


print(emojis[0])
text = emojis[0].get_text().strip()
print(text)
print(text[0])
print(text[1:])


for emoji in emojis:
    content = emoji.text.strip().split('Flag: ')
    flag = content[0]
    print(content)