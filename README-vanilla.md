# Form Filler - Automate Form Population with Vanilla JavaScript

![GitHub](https://img.shields.io/github/license/mahsa-jannaty/form-filler)

Automate the population of form fields with random data quickly using Vanilla JavaScript. This project is helpful for testing and development when you need to fill out forms for various scenarios.

## Features

-  Fill text inputs and textareas with random strings.
-  Set number inputs to random numbers.
-  Assign random file names to file input fields.
-  Select random options in dropdown (select) elements.

## Getting Started

To start using this form filler, follow these steps:

1. Add the `form-filler-vanilla.js` file next to the index.html file in your project (or anywhere else you want).

2. Include this piece of code at the end of the HTML `head` tag:

```html
<script type="module">
	import fillAllFormsWithFakeData from './form-filler-vanilla.js';
	fillAllFormsWithFakeData();
</script>
```

**Note:** Make sure the path of the file is defined corresponding to where you've saved the file in your project.

### Prerequisites

-  A server for serving and previewing the html file
-  A modern web browser that suports [ES6 import/export syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
