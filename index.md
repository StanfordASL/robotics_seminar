---
layout: default
---

Stanford Robotics and Autonomous Systems Seminar series hosts both invited and internal speakers. The seminar aims to bring the campus-wide robotics community together and provide a platform to overview and foster discussion about the progress and challenges in the various disciplines of Robotics. This quarter, the seminar is also offered to students as a [1 unit course](https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&page=0&catalog=&academicYear=&q=Robotics+and+Autonomous+Systems+Seminar&collapse=). *Note that registration to the class is NOT required in order to attend the talks.*

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
