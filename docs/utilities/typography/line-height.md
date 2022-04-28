---
layout: page
title: Line Height
description: Utilities to change an element's line-height.
---
<section class="d-stack8">
    {% header "h2", "CSS Variables" %}
    <div class="d-h464 d-of-y-scroll d-bb d-bc-black-200">
        <table class="d-table">
            <thead>
                <tr>
                    <th scope="col" class="d-w25p">Variable</th>
                    <th scope="col">Output</th>
                </tr>
            </thead>
            <tbody>
                {% for i in type.line-height %}
                {% assign class = i.class %}
                {% assign output = i.output %}
                {% if class != "unset" %}
                    {% assign addition = class | plus: 0 %}
                    {% capture addition %}{{ addition }}{% endcapture %}
                    <tr>
                        <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">var(--lh{% if class != addition %}-{% endif %}{{ class }})</th>
                        <td class="d-ff-mono d-fc-orange d-fs12">{{ output }}</td>
                    </tr>
                {% endif %}
                {% endfor %}
            </tbody>
        </table>
    </div>
</section>
<section class="d-stack8">
    {% header "h2", "Classes" %}
    <div class="d-h464 d-of-y-scroll d-bb d-bc-black-200">
        <table class="d-table">
            <thead>
                <tr>
                    <th scope="col" class="d-w25p">Class</th>
                    <th scope="col">Output</th>
                </tr>
            </thead>
            <tbody>
                {% for i in type.line-height %}
                {% assign class = i.class %}
                {% assign output = i.output %}
                {% if class != "unset" %}
                    {% assign addition = class | plus: 0 %}
                    {% capture addition %}{{ addition }}{% endcapture %}
                    <tr>
                        <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-lh{% if class != addition %}-{% endif %}{{ class }}</th>
                        <td class="d-ff-mono d-fc-orange d-fs12">line-height: var(--lh{% if class != addition %}-{% endif %}{{ class }}) !important;</td>
                    </tr>
                {% endif %}
                {% endfor %}
            </tbody>
        </table>
    </div>
</section>
<section class="d-stack16">
    <header class="d-stack2">
        {% header "h2", "Relative line-heights" %}
        {% paragraph %}Use {% code %}d-lh-{n}{% endcode %} to change an element's line-height relatively. This means no unit is set with the line-height. Instead the line-height value is a multiple of the font-size.{% endparagraph %}
    </header>
    <aside class="d-bar8 d-of-hidden">
        <header class="d-d-flex d-jc-center d-fd-column d-p24 d-bgc-purple-100 d-w100p d-hmn102">
            <div class="d-d-grid d-gg16 d-ai-center" style="grid-template-columns: 10rem 1fr">
                <div class="d-fs12 d-ff-mono d-fc-purple d-fco75">.d-lh-tighter</div>
                <div><p class="d-fs24 d-lh-tighter d-fc-orange d-bgc-purple-200 d-bgo25">The quick brown fox jumps over the lazy dog.</p></div>
                <div class="d-fs12 d-ff-mono d-fc-purple d-fco75">.d-lh-tight</div>
                <div><p class="d-fs24 d-lh-tight d-fc-orange d-bgc-purple-200 d-bgo25">The quick brown fox jumps over the lazy dog.</p></div>
                <div class="d-fs12 d-ff-mono d-fc-purple d-fco75">.d-lh-normal</div>
                <div><p class="d-fs24 d-lh-normal d-fc-orange d-bgc-purple-200 d-bgo25">The quick brown fox jumps over the lazy dog.</p></div>
                <div class="d-fs12 d-ff-mono d-fc-purple d-fco75">.d-lh-loose</div>
                <div><p class="d-fs24 d-lh-loose d-fc-orange d-bgc-purple-200 d-bgo25">The quick brown fox jumps over the lazy dog.</p></div>
                <div class="d-fs12 d-ff-mono d-fc-purple d-fco75">.d-lh-looser</div>
                <div><p class="d-fs24 d-lh-looser d-fc-orange d-bgc-purple-200 d-bgo25">The quick brown fox jumps over the lazy dog.</p></div>
            </div>
        </header>
        <footer class="d-p8 d-bgc-black-700 d-bbr8 d-fs12">
{% highlight html linenos %}
<p class="d-lh-tighter">...</p>
<p class="d-lh-tight">...</p>
<p class="d-lh-normal">...</p>
<p class="d-lh-loose">...</p>
<p class="d-lh-looser">...</p>
{% endhighlight %}
        </footer>
    </aside>
</section>
<section class="d-stack16">
    <header class="d-stack2">
        {% header "h2", "Fixed line-heights" %}
        {% paragraph %}Use {% code %}d-lh{n}{% endcode %} to fix an element's line-height. This allows you to target a specific line-height based on the font-size. For example if a target 20px line-height is desired and the current font-size is 14px, apply {% code %}.d-lh6{% endcode %} to achieve this target (14px font-size + 6px = 20px target line-height).{% endparagraph %}
    </header>
    <aside class="d-bar8 d-of-hidden">
        <header class="d-d-flex d-jc-center d-fd-column d-p24 d-bgc-yellow-100 d-w100p d-hmn102">
            <div class="d-d-grid d-gg16 d-ai-center" style="grid-template-columns: 10rem 1fr">
                <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh0</div>
                <div><p class="d-fs24 d-lh0 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
                <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh1</div>
                <div><p class="d-fs24 d-lh1 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
                <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh2</div>
                <div><p class="d-fs24 d-lh2 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
                <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh4</div>
                <div><p class="d-fs24 d-lh4 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
                <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh6</div>
                <div><p class="d-fs24 d-lh6 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
                <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh8</div>
                <div><p class="d-fs24 d-lh8 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
                <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh12</div>
                <div><p class="d-fs24 d-lh12 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
                <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh16</div>
                <div><p class="d-fs24 d-lh16 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
                <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh20</div>
                <div><p class="d-fs24 d-lh20 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
                <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh24</div>
                <div><p class="d-fs24 d-lh24 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
            </div>
        </header>
        <footer class="d-p8 d-bgc-black-700 d-bbr8 d-fs12">
{% highlight html linenos %}
<p class="d-lh0">...</p>
<p class="d-lh1">...</p>
<p class="d-lh2">...</p>
<p class="d-lh4">...</p>
<p class="d-lh6">...</p>
<p class="d-lh8">...</p>
<p class="d-lh12">...</p>
<p class="d-lh16">...</p>
<p class="d-lh20">...</p>
<p class="d-lh24">...</p>
{% endhighlight %}
        </footer>
    </aside>
</section>
