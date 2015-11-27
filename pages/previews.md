---
title: Previews
permalink: previews/
type: index
---

{% for page in site.pages %}
{% if page.preview %}
<section class="post-title">
    <h1 class="">{{page.title}}</h1>
    <p class="script-text">
    <span class="author"><a href="{{site.about}}">{% include authors.html %}</a></span>
    <span class="date">{% include dates_ita.html %}</span>
    </p>
    {% if post.tag %}
    <div class="tags">
    <i class="fa fa-tag"></i>
    {% for tag in post.tag %}
    <a href="/{{tag}}" class="nobold">{{tag}}</a>
    {% endfor %}
    </div>
    {% endif %}
</section>
{% endif %}
{% endfor %}
