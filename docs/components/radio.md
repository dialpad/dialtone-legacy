---
title: Radio
desc: A radio is an input control that allows users to select only one option from a number of choices.
storybook_url: https://vue.dialpad.design/?path=/story/components-radio--default
---
<code-well-header>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup0" id="Dialtone-RadioExample0" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioExample0">Radio label</label>
    </div>
  </div>
</code-well-header>

## Usage
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Morbi massa ante, tempus vitae lacus id, luctus tristique lorem.
Mauris feugiat massa ex, id aliquet mi tempor non. Curabitur non tristique lectus.
Fusce ut nisl non diam dignissim viverra.
In posuere dui arcu, sed eleifend massa faucibus sed.
Phasellus quis leo vitae erat pellentesque venenatis id vitae lectus.
Suspendisse convallis, metus a congue tincidunt, velit sem tincidunt dui, eget auctor ipsum ipsum in ex.
Nullam lobortis, mauris vel vestibulum rutrum, lorem elit vehicula est, nec viverra ante erat nec dolor.
Proin at placerat tortor.
Nam ullamcorper metus et eros porta, at lacinia leo scelerisque. Curabitur finibus sollicitudin odio tempor finibus.
Donec lobortis metus vitae mollis gravida.

## Variants and Examples
### Base Styles
<code-well-header>
  <fieldset class="d-stack8">
    <div class="d-radio-group">
      <div class="d-radio__input">
        <input class="d-radio" type="radio" name="Dialtone-RadioGroup1" id="Dialtone-RadioExample1" />
      </div>
      <div class="d-radio__copy">
        <label class="d-radio__label" for="Dialtone-RadioExample1">Radio label</label>
      </div>
    </div>
    <div class="d-radio-group">
      <div class="d-radio__input">
        <input class="d-radio" type="radio" name="Dialtone-RadioGroup1" id="Dialtone-RadioExample2" checked />
      </div>
      <div class="d-radio__copy">
        <label class="d-radio__label" for="Dialtone-RadioExample2">Radio label</label>
      </div>
    </div>
    <div class="d-radio-group d-radio-group--disabled">
      <div class="d-radio__input">
        <input class="d-radio" type="radio" name="Dialtone-RadioGroup1" id="Dialtone-RadioExample3" disabled />
      </div>
      <div class="d-radio__copy">
        <label class="d-radio__label" for="Dialtone-RadioExample3">Radio label that's been disabled</label>
      </div>
    </div>
    <div class="d-radio-group d-radio-group--disabled">
      <div class="d-radio__input">
        <input class="d-radio" type="radio" name="Dialtone-RadioGroup1" id="Dialtone-RadioExample4" disabled checked />
      </div>
      <div class="d-radio__copy">
        <label class="d-radio__label" for="Dialtone-RadioExample4">Radio label that's been disabled</label>
      </div>
    </div>
    <div class="d-radio-group d-radio-group--disabled">
      <div class="d-radio__input">
        <input class="d-radio d-radio--disabled" type="radio" name="Dialtone-RadioGroup1" id="Dialtone-RadioExample5" />
      </div>
      <div class="d-radio__copy">
        <label class="d-radio__label" for="Dialtone-RadioExample5">Radio label that's been disabled (but without the `disabled` attribute)</label>
      </div>
    </div>
  </fieldset>
</code-well-header>

```html
<fieldset class="d-stack8">
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup1" id="Dialtone-RadioExample1" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioExample1">Radio label</label>
    </div>
  </div>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup1" id="Dialtone-RadioExample2" checked />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioExample2">Radio label</label>
    </div>
  </div>
  <div class="d-radio-group d-radio-group--disabled">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup1" id="Dialtone-RadioExample3" disabled />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioExample3">Radio label that's been disabled</label>
    </div>
  </div>
  <div class="d-radio-group d-radio-group--disabled">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup1" id="Dialtone-RadioExample4" disabled checked />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioExample4">Radio label that's been disabled</label>
    </div>
  </div>
  <div class="d-radio-group d-radio-group--disabled">
    <div class="d-radio__input">
      <input class="d-radio d-radio--disabled" type="radio" name="Dialtone-RadioGroup1" id="Dialtone-RadioExample5" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioExample5">Radio label that's been disabled (but without the `disabled` attribute)</label>
    </div>
  </div>
</fieldset>
```

### Stacked Group
<code-well-header>
  <fieldset class="d-stack8">
    <legend class="d-label">Advanced missed call routing</legend>
    <div class="d-radio-group">
      <div class="d-radio__input">
        <input class="d-radio" type="radio" name="Dialtone-RadioGroup2" id="Dialtone-RadioGroupAExample1" />
      </div>
      <div class="d-radio__copy">
        <label class="d-radio__label" for="Dialtone-RadioGroupAExample1" checked>To voicemail</label>
      </div>
    </div>
    <div class="d-radio-group">
      <div class="d-radio__input">
        <input class="d-radio" type="radio" name="Dialtone-RadioGroup2" id="Dialtone-RadioGroupAExample2" />
      </div>
      <div class="d-radio__copy">
        <label class="d-radio__label" for="Dialtone-RadioGroupAExample2">To a message (no voicemail)</label>
      </div>
    </div>
    <div class="d-radio-group">
      <div class="d-radio__input">
        <input class="d-radio" type="radio" name="Dialtone-RadioGroup2" id="Dialtone-RadioGroupAExample3" />
      </div>
      <div class="d-radio__copy">
        <label class="d-radio__label" for="Dialtone-RadioGroupAExample3">To a team member or room phone</label>
      </div>
    </div>
  </fieldset>
</code-well-header>

```html
<fieldset class="d-stack8">
  <legend class="d-label">Advanced missed call routing</legend>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup2" id="Dialtone-RadioGroupAExample1" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupAExample1" checked>To voicemail</label>
    </div>
  </div>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup2" id="Dialtone-RadioGroupAExample2" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupAExample2">To a message (no voicemail)</label>
    </div>
  </div>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup2" id="Dialtone-RadioGroupAExample3" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupAExample3">To a team member or room phone</label>
    </div>
  </div>
</fieldset>
```

### With Description Text
<code-well-header>
  <fieldset class="d-stack8">
    <legend class="d-label">Advanced missed call routing</legend>
    <div class="d-radio-group">
      <div class="d-radio__input">
        <input class="d-radio" type="radio" name="Dialtone-RadioGroup3" id="Dialtone-RadioGroupBExample1" />
      </div>
      <div class="d-radio__copy">
        <label class="d-radio__label" for="Dialtone-RadioGroupBExample1" checked>To voicemail</label>
        <div class="d-description">So they can hear your voice</div>
      </div>
    </div>
    <div class="d-radio-group">
      <div class="d-radio__input">
        <input class="d-radio" type="radio" name="Dialtone-RadioGroup3" id="Dialtone-RadioGroupBExample2" />
      </div>
      <div class="d-radio__copy">
        <label class="d-radio__label" for="Dialtone-RadioGroupBExample2">To a message (no voicemail)</label>
        <div class="d-description">Because they probably don't need to leave a message anyway.</div>
      </div>
    </div>
    <div class="d-radio-group">
      <div class="d-radio__input">
        <input class="d-radio" type="radio" name="Dialtone-RadioGroup3" id="Dialtone-RadioGroupBExample3" />
      </div>
      <div class="d-radio__copy">
        <label class="d-radio__label" for="Dialtone-RadioGroupBExample3">To a team member or room phone</label>
        <div class="d-description">Because someone else might be able to talk to them.</div>
      </div>
    </div>
  </fieldset>
</code-well-header>

```html
<fieldset class="d-stack8">
  <legend class="d-label">Advanced missed call routing</legend>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup3" id="Dialtone-RadioGroupBExample1" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupBExample1" checked>To voicemail</label>
      <div class="d-description">So they can hear your voice</div>
    </div>
  </div>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup3" id="Dialtone-RadioGroupBExample2" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupBExample2">To a message (no voicemail)</label>
      <div class="d-description">Because they probably don't need to leave a message anyway.</div>
    </div>
  </div>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup3" id="Dialtone-RadioGroupBExample3" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupBExample3">To a team member or room phone</label>
      <div class="d-description">Because someone else might be able to talk to them.</div>
    </div>
  </div>
</fieldset>
```

### With Validation States
<code-well-header>
  <fieldset class="d-stack8">
    <legend class="d-label">Advanced missed call routing</legend>
    <div class="d-radio-group">
      <div class="d-radio__input">
        <input class="d-radio d-radio--warning" type="radio" name="Dialtone-RadioGroup4" id="Dialtone-RadioGroupCExample1" />
      </div>
      <div class="d-radio__copy">
        <label class="d-radio__label" for="Dialtone-RadioGroupCExample1">To voicemail</label>
        <div class="d-validation-message d-validation-message--warning">So they can hear your voice</div>
      </div>
    </div>
    <div class="d-radio-group">
      <div class="d-radio__input">
        <input class="d-radio d-radio--error" type="radio" name="Dialtone-RadioGroup4" id="Dialtone-RadioGroupCExample2" />
      </div>
      <div class="d-radio__copy">
        <label class="d-radio__label" for="Dialtone-RadioGroupCExample2">To a message (no voicemail)</label>
        <div class="d-validation-message d-validation-message--error">Because they probably don't need to leave a message anyway.</div>
      </div>
    </div>
    <div class="d-radio-group">
      <div class="d-radio__input">
        <input class="d-radio d-radio--success" type="radio" name="Dialtone-RadioGroup4" id="Dialtone-RadioGroupCExample3" />
      </div>
      <div class="d-radio__copy">
        <label class="d-radio__label" for="Dialtone-RadioGroupCExample3">To a team member or room phone</label>
        <div class="d-validation-message d-validation-message--success">Because someone else might be able to talk to them.</div>
      </div>
    </div>
  </fieldset>
</code-well-header>

```html
<fieldset class="d-stack8">
  <legend class="d-label">Advanced missed call routing</legend>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio d-radio--warning" type="radio" name="Dialtone-RadioGroup4" id="Dialtone-RadioGroupCExample1" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupCExample1">To voicemail</label>
      <div class="d-validation-message d-validation-message--warning">So they can hear your voice</div>
    </div>
  </div>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio d-radio--error" type="radio" name="Dialtone-RadioGroup4" id="Dialtone-RadioGroupCExample2" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupCExample2">To a message (no voicemail)</label>
      <div class="d-validation-message d-validation-message--error">Because they probably don't need to leave a message anyway.</div>
    </div>
  </div>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio d-radio--success" type="radio" name="Dialtone-RadioGroup4" id="Dialtone-RadioGroupCExample3" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupCExample3">To a team member or room phone</label>
      <div class="d-validation-message d-validation-message--success">Because someone else might be able to talk to them.</div>
    </div>
  </div>
</fieldset>
```

## Classes
<component-class-table component-name="radio" />

## Accessibility
The best accessibility is semantic HTML. Most screen readers understand how to parse inputs if they’re correctly formatted. When it comes to radio input, there are a few things to keep in mind:
- All inputs should have an `id` attribute.
- Associate radio labels with their inputs using the `for` attribute. This correlates with the radio's `id`.
- If you have a group of related radios, use a `fieldset` to group them and a `legend` to title the group. For further information, please visit Gov.UK’s article, <a href="https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements/">"Using the fieldset and legend elements"</a>.
- If the input is a required field, use the `aria-required` property and use the validation message for input errors.
- Input with validation errors should have `aria-describedby` with the `id` of the validation message.

