import re
html = open('live-site.html', encoding='utf-16').read()
matches = re.findall(r'.{0,40}\.jpg|.{0,40}\.png|.{0,40}\.jpeg', html)
for match in set(matches):
    print(match.strip())
