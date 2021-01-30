# SA(scollimate) Pop-In
![SA POPIN SAMPLE](http://files.moritzzimmer.com/popin.gif)

### ABOUT:

A simple and easy jQuery based Plug-In that allows elements in your document to “pop in” when they are scrolled into view. Either from the bottom (default), the left or the right.

When the page is scrolled back to the very top, and then scrolled back down, the elements will pop into view again.

## _BASIC SETUP_:
You need to have two things: 

### 1.) A Navigation of links, with each link wrapped in a parent.

Add the follwing custom Data-Attribute to the element that you want to “pop in” when you scroll it into view:

    data-sapopin
    
Note that you do not need to specify any actualy value for this attirbute. The default behavior is for the element to pop in from the bottom.

However, if you do want to specify the direction you want the element to slide in _from_, simply add the direction you want the element to slide in from, such as 

    data-sapopin="left"

### 2.) In the body, right before the footer: Include jQuery. Include sapopin.js.

    <script src="path/to/your/scripts/jquery-2.1.4.min.js"></script>
    <script src="path/to/your/scripts/sapopin.js"></script>

---

## _ADVANCED SETUP_

If you would like a little bit more control over the animation, you can edit the actual file, `sapopin.js`. There are three numbers, you can edit them as follows:

#### First Number:
This controls the amount of pixels the element will scroll or pop in from. The higher the number, the longer path the element will travel until it meets it's destination.

#### Second Number:
This number controls the _starting_ visibility of the element. 0.0 means it is completely transparent, while 1.0 means it will be completely visible. 

#### Third Number: 
The third number is the amount of time it takes for the element to slide/pop in, as measured in seconds.

---

### Warnings:

* This new version of this Plugin now uses transform: translate3D. If you are already applying styles to the element using transform3d, they will most likely be overridden. To prevent this, you might chose to wrap the inside of the element element with anther div or span element, and apply the `data-sapopin` attribute to it, OR consider ...


#### ...using the position:relative version:

* Because translate3d might also make this version not as compatible with some browsers, so you may chose to use an older version on the “position” branch instead.


#### Additional Warnings RE: position:relative version

* This version moves elements using inline-CSS and the `position` attribute, in `relative` positioning. This does mean that if you have your element already positioned relatively via a stylesheet, it will most likely be overwritten. To prevent this, you might chose to wrap the inside of the lement element with anther div or span element, and apply the attribute to it, thuswise:

- starting point:
    ```
    <section style="position: relative; top: 254px">
        ...
    </section>
    ```
    
- turn into this:
    ```
    <section style="position: relative; top: 254px">
        <div data-sapopin>
            ...
        </div>
    </section>
    ```


---


(c) 2016 by Moritz Zimmer



