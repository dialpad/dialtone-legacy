---
layout: page
title: Text Transform
description: Utilities for controlling an element's text transform.
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
            {% assign transform = type.transform | split: ", " %}
            {% for i in transform %}
                <tr>
                    <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-tt-{{ i }}</th>
                    <td class="d-ff-mono d-fc-orange d-fs12">text-transform: {{ i }} !important;</td>
                </tr>
            {% endfor %}
        </tbody>
    </table>
</section>
<section class="d-stack16">
    <header class="d-stack2">
        {% header "h2", "Uppercase" %}
        {% paragraph %}Use {% code %}d-tt-uppercase{% endcode %} to uppercase an element's text.{% endparagraph %}
    </header>
    <aside class="d-bar8 d-of-hidden">
        <header class="d-fl-center d-p24 d-bgc-green-100 d-bgo50 d-w100p d-hmn102">
            <p class="d-fs24 d-fc-green-500 d-tt-uppercase">The quick brown fox jumps over the lazy dog.</p>
        </header>
        <footer class="d-p8 d-bgc-black-700 d-bbr8 d-fs12">
{% highlight html linenos %}
<p class="d-tt-uppercase">...</p>
{% endhighlight %}
        </footer>
    </aside>
</section>
<section class="d-stack16">
    <header class="d-stack2">
        {% header "h2", "Lowercase" %}
        {% paragraph %}Use {% code %}d-tt-lowercase{% endcode %} to lowercase an element's text.{% endparagraph %}
    </header>
    <aside class="d-bar8 d-of-hidden">
        <header class="d-fl-center d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn102">
            <p class="d-fs24 d-fc-purple-400 d-tt-lowercase">The quick brown fox jumps over the lazy dog.</p>
        </header>
        <footer class="d-p8 d-bgc-black-700 d-bbr8 d-fs12">
{% highlight html linenos %}
<p class="d-tt-lowercase">...</p>
{% endhighlight %}
        </footer>
    </aside>
</section>
<section class="d-stack16">
    <header class="d-stack2">
        {% header "h2", "Capitalize" %}
        {% paragraph %}Use {% code %}d-tt-capitalize{% endcode %} to capitalize an element's text.{% endparagraph %}
    </header>
    <aside class="d-bar8 d-of-hidden">
        <header class="d-fl-center d-p24 d-bgc-pink-100 d-bgo50 d-w100p d-hmn102">
            <p class="d-fs24 d-fc-pink d-tt-capitalize">The quick brown fox jumps over the lazy dog.</p>
        </header>
        <footer class="d-p8 d-bgc-black-700 d-bbr8 d-fs12">
{% highlight html linenos %}
<p class="d-tt-capitalize">...</p>
{% endhighlight %}
        </footer>
    </aside>
</section>
