---
title: Archivo de artículos
permalink: blog/
---

{% for page in site.posts %}
<section class="post-title no-bar">
    <h1><a href="{{page.url}}">{{page.title}}</a></h1>
    <p class="script-text">
    <span class="author"><a class="link-scale-effect" href="{{site.about}}">{% include authors.html %}</a></span>
    <span class="date">{% include dates_{{site.language}}.html %}</span>
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
{% endfor %}
