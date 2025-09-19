---
layout: default
---

<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  <strong>Attention</strong><br/><br/>
  The talks will be in-person. 
</div>

Stanford Robotics and Autonomous Systems Seminar series hosts both invited and internal speakers. The seminar aims to bring the campus-wide robotics community together and provide a platform to overview and foster discussion about the progress and challenges in the various disciplines of Robotics. This quarter, the seminar is also offered to students as a [1 unit course](https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&page=0&catalog=&academicYear=&q=Robotics+and+Autonomous+Systems+Seminar&collapse=). *Note that registration to the class is NOT required in order to attend the talks.*

The course [syllabus is available here]({{ "/assets/doc/" | append: site.current-syllabus | relative_url }}). Go [here](https://stanfordasl.github.io/robotics_seminar/class/) for more course details.

The seminar is open to Stanford faculty, students, and sponsors.

## Attedence Form
For students taking the class, please fill out the attendance form: [https://tinyurl.com/robotsem-fall-25](https://tinyurl.com/robotsem-fall-2025) when attending the seminar to receive credit. You need to fill out 7 attedence to receive credit for the quarter, or make up for it by submitting late paragraphs on the talks you missed via Canvas.

## Seminar Youtube Recordings
All publically available past seminar recordings can be viewed on our [YouTube Playlist](https://www.youtube.com/playlist?list=PLoROMvodv4rMeercb-kvGLUrOq4HR6BZD). Registered students can access all talk recordings on Canvas.

## Get Email Notifications
Sign up for the mailing list: [Click here](https://mailman.stanford.edu/mailman/listinfo/stanfordrobotics)!

<div class="container">
  {% for quarter in site.data.quarters %}
    {% if site.displayed-quarters contains quarter.quarter %}
      {% include quarter.html quarter=quarter %}
    {% endif %}
  {% endfor %}
</div>

## Sponsors 

The Stanford Robotics and Autonomous Systems Seminar enjoys the support of the following sponsors.

<div class="sponsorslist">
  <div class="sponsor">
      <a href="https://forum.stanford.edu/index.php"><img src="{{ "/assets/img/sponsors/computer_forum.jpg" | relative_url }}"/></a>
  </div>
  <!--
  <div class="sponsor">
      <a href="https://www.tri.global"><img src="{{ "/assets/img/sponsors/tri.jpg" | relative_url }}"/></a>
  </div>
  -->
</div>
