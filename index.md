---
title: {{site.title}}
---

{% for post in site.posts %}

<div class="postTitle"><a href="{{ post.url }}">{{ post.title }}</a></div>
<div class="postStats"><i class="fa fa-clock-o"></i>{% include dates_ita.html %}
{% if post.tag %}
<div class="tags">
<i class="fa fa-tag"></i>
{% for tag in post.tag %}
<a href="/{{tag}}" class="nobold">{{tag}}</a>
{% endfor %}
</div>
{% endif %}
</div>

{% endfor %}