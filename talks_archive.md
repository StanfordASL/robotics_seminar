---
layout: default
title: Archive
permalink: /archive/
---
# Archive

<div class="container">
  {% assign sorted_quarters_ = site.data.quarters | sort: "start" %}
  {% assign sorted_quarters = sorted_quarters_ | reverse %}
  {% for quarter in sorted_quarters %}
    {% if site.archived-quarters contains quarter.quarter %}
      {% include quarter.html quarter=quarter %}
    {% endif %}
  {% endfor %}
</div>
