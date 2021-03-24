---
title: "{{ replace .Name "-" " " | title }}"
year: 2001-{{ .Date.Format "2006" }} # It makes sense. Just trust me on this one.
draft: true
---
