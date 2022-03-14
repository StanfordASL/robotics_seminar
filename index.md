---
layout: default
---

<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  <strong>Attention</strong><br/><br/>
  The talks will be in-person. 
</div>

Stanford Robotics and Autonomous Systems Seminar series hosts both invited and internal speakers. The seminar aims to bring the campus-wide robotics community together and provide a platform to overview and foster discussion about the progress and challenges in the various disciplines of Robotics. This quarter, the seminar is also offered to students as a [1 unit course](https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&page=0&catalog=&academicYear=&q=Robotics+and+Autonomous+Systems+Seminar&collapse=). *Note that registration to the class is NOT required in order to attend the talks.*

The course [syllabus is available here](https://stanfordasl.github.io/robotics_seminar/assets/doc/Syllabus_AA289_wi2022.pdf). Go [here](https://stanfordasl.github.io/robotics_seminar/class/) for more course details.

The seminar is open to Stanford faculty, students, and sponsors.

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
