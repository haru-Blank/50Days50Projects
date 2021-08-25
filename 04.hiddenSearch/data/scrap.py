from typing import final
from bs4 import BeautifulSoup
import requests
import json

link = 'https://emojiterra.com/flags/'
html_doc = requests.get(link).text

soup = BeautifulSoup(html_doc, 'lxml')


try:
    emojis = soup.select('.cat-emojis')[1].select('a')
    countries = []

    for emoji in emojis:
        content = emoji.text.strip().split('Flag: ')
        flag, country = content[0], content[1]
        countries.append({country: flag})

    f = open("Countries.json", "w")
    f.write(json.dumps(countries))
    f.close()

except Exception:
    print("Exception: ", Exception)
