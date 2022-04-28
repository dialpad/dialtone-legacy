---
layout: page
title: Size
description: Utilities for controlling an SVG's size.

---

<section class="d-stack16">
  {% header "h2", "Classes" %}
  <table class="d-table">
    <thead>
      <tr>
        <th scope="col" class="d-w25p">Class</th>
        <th scope="col">Output</th>
      </tr>
    </thead>
    <tbody>
      {% for size in icons-sizes %}
        <tr>
          <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">{{ size.class }}</th>
            <td class="d-ff-mono d-fc-orange d-fs12">
              {% if size.sizeRem %}
                width: {{ size.sizeRem }} !important; height: {{ size.sizeRem }} !important;
              {% elsif size.class == "d-svg--size100p" %}
                width: 100% !important; height: auto !important;
              {% endif %}
            </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</section>
<section class="d-stack16">
  {% header "h2", "Usage" %}

  {% paragraph %}Use {% code %}d-svg--size{n}{% endcode %} to control the size of an SVG.{% endparagraph %}
  {% codeWell %}
    {% codeWellHeader %}
      {% iconSystem "phone", "d-svg--size14" %}
      {% iconSystem "phone", "d-svg--size16" %}
      {% iconSystem "phone", "d-svg--size18" %}
      {% iconSystem "phone", "d-svg--size20" %}
      {% iconSystem "phone", "d-svg--size24" %}
      {% iconSystem "phone", "d-svg--size32" %}
      {% iconSystem "phone", "d-svg--size48" %}
      {% iconSystem "phone", "d-svg--size64" %}
    {% endcodeWellHeader %}
    {% codeWellFooter %}
      {% highlight html linenos %}
<svg class="d-svg d-svg--system d-svg--size14">...</svg>
<svg class="d-svg d-svg--system d-svg--size16">...</svg>
<svg class="d-svg d-svg--system d-svg--size18">...</svg>
<svg class="d-svg d-svg--system d-svg--size20">...</svg>
<svg class="d-svg d-svg--system d-svg--size24">...</svg>
<svg class="d-svg d-svg--system d-svg--size32">...</svg>
<svg class="d-svg d-svg--system d-svg--size48">...</svg>
<svg class="d-svg d-svg--system d-svg--size64">...</svg>
      {% endhighlight %}
    {% endcodeWellFooter %}
  {% endcodeWell %}

  {% paragraph %}
    Use {% code %}d-svg--size100p{% endcode %} to set the size of an SVG to the size of the containing element.
  {% endparagraph %}
  {% codeWell %}
    {% codeWellHeader %}
      <div class="d-w32 d-h32">
        {% iconSystem "phone", "d-svg--size100p" %}
      </div>
    {% endcodeWellHeader %}
    {% codeWellFooter %}
      {% highlight html linenos %}
<div class="d-w32 d-h32">
  <svg class="d-svg d-svg--system d-svg--size100p">...</svg>
</div>
      {% endhighlight %}
    {% endcodeWellFooter %}
  {% endcodeWell %}
</section>
