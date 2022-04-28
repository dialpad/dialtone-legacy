---
layout: page
title: Lists
description: Utilities for controlling list styling.
---
<section class="d-stack8">
    {% header "h2", "Classes" %}
    <table class="d-table">
        <thead>
            <tr>
                <th scope="col" class="d-w25p">Class</th>
                <th scope="col">Output</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-ls-reset</th>
                <td class="d-ff-mono d-fc-orange d-fs12">
                    margin: 0;<br/>
                    padding: 0;<br/>
                    list-style: none !important;
                </td>
            </tr>
            <tr>
                <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-ls-none</th>
                <td class="d-ff-mono d-fc-orange d-fs12">list-style: none !important;</td>
            </tr>
            {% assign lists = type.lists | split: ", " %}
            {% for i in lists %}
            <tr>
                <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-lst-{{ i }}</th>
                <td class="d-ff-mono d-fc-orange d-fs12">list-style-type: {% if i == "content" %}var(--ls-content){% else %}{{ i }}{% endif %} !important;</td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
</section>
<section class="d-stack16">
    <header class="d-stack2">
        {% header "h2", "Resetting a list" %}
        {% paragraph %}Use {% code %}d-ls-reset{% endcode %} to reset the margin, padding, and list-style-type of a list. Reseting a list applies to the parent {% code %}ol{% endcode %} or {% code %}ul{% endcode %}, any child {% code %}li{% endcode %} elements, and any child {% code %}ol{% endcode %} or {% code %}ul{% endcode %} elements.{% endparagraph %}
    </header>
    <aside class="d-bar8 d-of-hidden">
        <header class="d-d-flex d-jc-center d-fd-column d-p24 d-bgc-purple-100 d-w100p d-hmn102">
            <ul class="d-ls-reset d-fc-purple d-fs18">
                <li>An unordered list item</li>
                <li>
                    <ol>
                        <li>An ordered list item</li>
                        <li>An ordered list item</li>
                    </ol>
                </li>
                <li>An unordered list item</li>
            </ul>
        </header>
        <footer class="d-p8 d-bgc-black-700 d-bbr8 d-fs12">
{% highlight html linenos %}
<ul class="d-ls-reset">
    <li>...</li>
    <li>
        <ol>
            <li>...</li>
            <li>...</li>
        </ol>
    </li>
    <li>...</li>
</ul>
{% endhighlight %}
        </footer>
    </aside>
</section>
<section class="d-stack16">
    <header class="d-stack2">
        {% header "h2", "Changing the list style type" %}
        {% paragraph %}Use {% code %}d-ls-{disc|decimal}{% endcode %} to change an unordered list's bullet styling.{% endparagraph %}
    </header>
    <aside class="d-bar8 d-of-hidden">
        <header class="d-d-flex d-jc-center d-fd-column d-p24 d-bgc-green-100 d-w100p d-hmn102">
            <ul class="d-lst-disc d-fs18 d-fc-green">
                <li>An unordered list item</li>
                <li>
                    <ul class="d-lst-circle">
                        <li class="d-pl4">An unordered list item</li>
                        <li class="d-pl4">An unordered list item</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li class="d-pl4 d-lst-content" style="--ls-content: '✅'">An unordered list item</li>
                        <li class="d-pl4 d-lst-content" style="--ls-content: '❌'">An unordered list item</li>
                    </ul>
                </li>
            </ul>
        </header>
        <footer class="d-p8 d-bgc-black-700 d-bbr8 d-fs12">
{% highlight html linenos %}
<ul class="d-lst-disc">
    <li>...</li>
    <li>
        <ul class="d-lst-circle">
            <li>...</li>
            <li>...</li>
        </ul>
    </li>
    <li>
        <ul>
            <li class="d-lst-content" style="--ls-content: '✅'">...</li>
            <li class="d-lst-content" style="--ls-content: '❌'">...</li>
        </ul>
    </li>
</ul>
{% endhighlight %}
        </footer>
    </aside>
</section>
