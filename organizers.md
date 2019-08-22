---
layout: default
title: Organizers
permalink: /organizers/
---
# Instructors
<div class="profile-row">
  {% for instructor in site.data.instructors %}
  <div class="profile">
    <a href="{{ instructor.website }}"><img class="profile-pic" src="{{ "/assets/img/" | append: instructor.picture | relative_url }}" />
    <p>{{ instructor.name }}</p></a>
  </div>
  {% endfor %}
</div>
# Organizers
<div class="profile-row">
  {% for organizer in site.data.organizers %}
  <div class="profile">
    <a href="{{ organizer.website }}"><img class="profile-pic" src="{{ "/assets/img/" | append: organizer.picture | relative_url }}" />
    <p>{{ organizer.name }}</p></a>
  </div>
  {% endfor %}
</div>
