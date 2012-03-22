Jasmine Testing Example
=======================

A very simple example of using jasmine for JavaScript testing and a couple of
tools that make test driven development easier.

First Time Setup
----------------

1.  Install Homebrew

    http://mxcl.github.com/homebrew/
1.  Install git

    `brew install git`
1.  Install Qt

    `brew install qt`
1.  Install RVM

    http://beginrescueend.com/
    
    Be sure to modify your shell rc file as instructed.
1.  Install ruby-1.9.2-p290

    `rvm install ruby-1.9.2-p290`
    
    `rvm use ruby-1.9.2-p290`
    
    `ruby -v` # should report "ruby 1.9.2p290..."
    
1.  Checkout the project

    `git clone git://github.com/christiannelson/jasmine-testing-example.git`
1.  CD into project (and switch to the right ruby version and gemset)

    `cd jasmine-testing-example`
    
    Say yes to trusting the .rvmrc
1.  Install bundler

    `gem install bundler --pre`
1.  Install dependencies using bundler

    `bundle`


Running the Tests from the Command Line
---------------------------------------

`jasmine-headless-webkit`


Running the Tests in the Browser
--------------------------------

TBD


Using Guard to Run Tests Whenever Something Changes
---------------------------------------------------

Guard will monitor changes to the js or the tests. When a change is detected, the tests are run automatically.

`guard`

Make a change to the js or tests, watch guard do its thing. It'll notify via growl if it's installed. Press enter to manually kick off a test run.
