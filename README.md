# Harp's Blog Boilerplate

_This is a boilerplate to use with the [Harp Platform](http://harp.io/) and [Harp SSG](https://github.com/sintaxi/harp) (the open source Static Site Generator)_

## Index

- [Harp Rules?](#harp-rules)
- [How to use it?](#how-to-use-it)
    - [On the Harp Platform](#on-the-harp-platform)
    - [On your own computer](#on-your-own-computer)
- [Controlling your content](#controlling-your-content)
- [Adding new posts](#adding-new-posts)
- [Adding new pages](#adding-new-pages)
- [Migrating from different platforms](#migrating-from-different-platforms)
    - [WordPress](#wordpress)
    - [Tumblr](#tumblr)
- [TODOs](#todos)
- [Support](#support)
- [License](#license)

## Harp Rules

1. No configuration required.
2. `public` directory is required.
3. `public` directory maps to URLs.
4. Files will only be served if they are in the `public` directory.
5. Files with extension `.less`, `.sass`, `.scss`, `.styl`, `.coffee`, and `.jade` will be compiled to their respective output formats.
6. Mime type may be specified with additional namespace in file name.
7. Files that start with underscore are ignored by server.
8. Files named `_data.json` make data available to templates.

To learn more about Harp, check out the [Harp handbook](http://handbook.harp.io/)

## How to use it?

### On the Harp Platform

1. Login/Signup to the [Harp Platform](http://harp.io/)
2. Create a new application
3. Choose "Blog Boilerplate" as your starting point
4. Start your application
5. Open and edit the files in your Dropbox

### On your own computer

1. [Install Harp SSG](https://github.com/sintaxi/harp#install) on your computer
2. Open your terminal and start a new project:

````
$ git clone git@github.com:jorgepedret/hbp-blog.git my-blog
$ cd my-blog
$ harp -s
````

Go to [http://localhost:8001](http://localhost:8001/) from your browser to see your website.

## Controlling your content

Harp brings you back to the basics of the web. Always keep in mind that your directory structure and file names are your URL paths.

What that means is that creating a new page is as simple as creating a new file a throwing some content in it.

### `public/posts`

This is where your posts and their content live.

### `public/_layout.jade`

Indicates the layout of your site, including header, footer and sidebar. External scripts or stylesheets are included in this file. Global elements belong here as well (i.e.: header, nav, sidebar, etc.)

### `public/index.jade`

This is the default page when you visit your domain (i.e.: `http://localhost:8001/`). Here we build the loop that goes through your posts and shows them in the front page.

### `public/_aside.jade`

Content for the sidebar.

### `public/bootstrap`

[Twitter Bootstrap](http://twitter.github.com/bootstrap/) files. This blog boilerplate was built so you can simply replace the `public/bootstrap` directory whenever you want to upgrade to a new version of Twitter Bootstrap.

You shouldn't modify this directories unless you want to upgrade or downgrade the library.

### `public/fontawesome`

[FontAwesome](http://fortawesome.github.com/Font-Awesome/) files. Same as Twitter Boostrap, this blog boilerplate was built so you can simply replace the `public/fontawesome` directory with a newer or older version of FontAwesome.

You shouldn't modify this directories unless you want to upgrade or downgrade the library.

### `public/css`, `public/js`, `public/img`

This is the place where your custom css, js and images should live.


## Adding new posts

__1__. Create a new jade or html file under `public/posts/`

````
touch public/posts/hello-world.html
````

__2__. Enter your post content in the file you just created

````
<!-- file: public/posts/hello-world.html -->
<h1>Hello World!</h1>
<p>This is my first post using Harp!</p>
````

__3__. Open `public/_data.json` and add your new post data

````
{
  "posts": {
    "hello-world": {
      "type": "post",
      "date": {
        "day": "18",
        "month": "feb",
        "year": "2013"
      }
    }
    ...
  }
}
````

## Adding new pages

__1__. Create a new file in public (actually, it can be anywhere you want)

````
touch public/about.html
````

__2__. Enter the page content in the newly created file

````
<!-- file: public/about.html -->
<h1>About me</h1>
<p>I love the fotoshopz and taking pictures of foods</p>
````

__3__. Your can now access your page in the browser. I.e.: `http://localhost:8001/about`

## Migrating from a different platform

### WordPress

I'm currently working on a migration tool for WordPress called [wp2static](https://github.com/jorgepedret/wp2static).

I created it in a couple of hours, so it's by no means a finished tool, but it'll get you half way there.

### Tumblr

TODO

## TODO
- Integrate [discuss](http://disqus.com/) for comments
- Create sitemap.xml for improving SEO

## Support

Please [create an issue](https://github.com/jorgepedret/hbp-blog/issues) on github's bug tracker. Feedback and bug reports are greatily appreciated.

## License

MIT