module.exports = {
    block: 'page',
    title: 'Css Grid',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            tag: 'header',
            block: 'header',
            mods: {open:'disable'},
            content: [
                {
                    tag: 'div',
                    elem: 'logo',
                    content: [ 
                        {
                            tag: 'p',
                            elem: 'logo-paragraph',
                            content:[
                                'lo'
                            ]
                        },
                        {
                            tag: 'p',
                            elem: 'logo-paragraph',
                            content:[
                                'go'
                            ]
                        }
                    ],
                },
                {
                    tag: 'nav',
                    elem: 'menu',
                    content: [
                        {
                            tag: 'a',
                            elem: 'menu-link',
                            elemMods: { active: true },
                            attrs:{href: '.main'},
                            content: [
                                'Home'
                            ]
                        },
                        {
                            tag: 'a',
                            elem: 'menu-link',
                            attrs:{href: '.service'},
                            content: [
                                'Services'
                            ]
                        },
                        {
                            tag: 'a',
                            elem: 'menu-link',
                            attrs:{href: '.projects'},
                            content: [
                                'Portfolio'
                            ]
                        },
                        {
                            tag: 'a',
                            elem: 'menu-link',
                            attrs:{href: '.blog'},
                            content: [
                                'Blog'
                            ]
                        }
                    ]
                },
                {
                    elem: 'menu-burger',
                    content: [
                        {
                            tag: 'span',
                            elem: 'burger-line'
                        },
                        {
                            tag: 'span',
                            elem: 'burger-line'
                        },
                        {
                            tag: 'span',
                            elem: 'burger-line'
                        },
                        {
                            tag: 'span',
                            elem: 'burger-line'
                        }
                    ]
                }
            ]
        },
        {
            tag: 'main',
            block: 'main',
            content: [
                {
                    tag: 'section',
                    block: 'js-viewport',
                    content: [
                        {
                            elem: 'text',
                            content: [
                                {
                                    tag: 'h1',
                                    elem: 'title',
                                    content: [
                                        
                                            'Always a step ahead',
                                            {
                                                tag: 'br'
                                            },
                                            'GO PRO'
                                        
                                        
                                    ]
                                },
                                {
                                    tap: 'p',
                                    elem: 'paragraph',
                                    content: [
                                        'Learn More'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'sliders',
                            content: [
                                {
                                    tag: 'img',
                                    elem: 'sliders-slide',
                                    attrs: {
                                        src: '../../img/bg_main_slide/bg_one.png'
                                    }
                                },
                                {
                                    tag: 'img',
                                    elem: 'sliders-slide',
                                    attrs: {
                                        src: '../../img/bg_main_slide/bg_main.png'
                                    }
                                },
                                {
                                    tag: 'img',
                                    elem: 'sliders-slide',
                                    attrs: {
                                        src: '../../img/bg_main_slide/bg_two.png'
                                    }
                                }
                            ]
                        },
                        {
                            tag: 'ul',
                            elem: 'nav-btns',
                            content: [
                                {
                                    tag: 'li',
                                    elem: 'slide-btn',
                                    elemMods: { active: true },
                                },
                                {
                                    tag: 'li',
                                    elem: 'slide-btn'
                                },
                                {
                                    tag: 'li',
                                    elem: 'slide-btn'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: 'section',
                    block: 'service',
                    content: [
                        {
                            tag: 'h2',
                            elem: 'title',
                            content: [
                                'WE PROVIDE',
                                {
                                    tag: 'br'
                                },
                                'THE BEST SERVICE'
                            ]
                        },
                        {
                            tag: 'p',
                            elem: 'paragraph',
                            elemMods: { mobile: false },
                            content: [
                                'Lorem Ipsum is simply dummy text of the printing and typesetting',
                                {
                                    tag: 'br'
                                },
                                'industry.Lorem Ipsum is simply dummy text of the printing and',
                                {
                                    tag: 'br'
                                },
                                'typesetting industry.'
                            ]
                        },
                        {
                            tag: 'p',
                            elem: 'paragraph',
                            elemMods: { mobile: true },
                            content: [
                                'Lorem Ipsum is simply dummy',
                                {
                                    tag: 'br'
                                },
                                'text of the printing and typesetting',
                                {
                                    tag: 'br'
                                },
                                'industry.Lorem Ipsum is simply',
                                {
                                    tag: 'br'
                                },
                                'dummy text of the printing and',
                                {
                                    tag: 'br'
                                },
                                'typesetting industry.'
                            ]
                        },
                        {
                            elem: 'card',
                            elemMods: { web: true },
                            content: [
                                {
                                    tag: 'i',
                                    elem: 'card-icon'
                                },
                                {
                                    tag: 'h3',
                                    elem: 'card-title',
                                    content: [
                                        'web development'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    elem: 'card-paragraph',
                                    content: [
                                        'There are many variations of passages',
                                        {
                                            tag: 'br'
                                        },
                                        'of Lorem Ipsum available, but the',
                                        {
                                            tag: 'br'
                                        },
                                        'majority have suffered alteration.'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    elem: 'card-paragraph',
                                    elemMods: { mobile: true },
                                    content: [
                                        'There are many',
                                        {
                                            tag: 'br'
                                        },
                                        'variations of passages',
                                        {
                                            tag: 'br'
                                        },
                                        'of Lorem Ipsum',
                                        {
                                            tag: 'br'
                                        },
                                        'available, but the',
                                        {
                                            tag: 'br'
                                        },
                                        'majority have suffered alteration.'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'card',
                            elemMods: { pencilruller: true },
                            content: [
                                {
                                    tag: 'i',
                                    elem: 'card-icon'
                                },
                                {
                                    tag: 'h3',
                                    elem: 'card-title',
                                    content: [
                                        'UI/UX DESIGN'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    elem: 'card-paragraph',
                                    content: [
                                        'There are many variations of passages',
                                        {
                                            tag: 'br'
                                        },
                                        'of Lorem Ipsum available, but the',
                                        {
                                            tag: 'br'
                                        },
                                        'majority have suffered alteration.'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    elem: 'card-paragraph',
                                    elemMods: { mobile: true },
                                    content: [
                                        'There are many',
                                        {
                                            tag: 'br'
                                        },
                                        'variations of passages',
                                        {
                                            tag: 'br'
                                        },
                                        'of Lorem Ipsum',
                                        {
                                            tag: 'br'
                                        },
                                        'available, but the',
                                        {
                                            tag: 'br'
                                        },
                                        'majority have suffered alteration.'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'card',
                            elemMods: { soft: true },
                            content: [
                                {
                                    tag: 'i',
                                    elem: 'card-icon'
                                },
                                {
                                    tag: 'h3',
                                    elem: 'card-title',
                                    content: [
                                        'software development'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    elem: 'card-paragraph',
                                    content: [
                                        'There are many variations of passages',
                                        {
                                            tag: 'br'
                                        },
                                        'of Lorem Ipsum available, but the',
                                        {
                                            tag: 'br'
                                        },
                                        'majority have suffered alteration.'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    elem: 'card-paragraph',
                                    elemMods: { mobile: true },
                                    content: [
                                        'There are many',
                                        {
                                            tag: 'br'
                                        },
                                        'variations of passages',
                                        {
                                            tag: 'br'
                                        },
                                        'of Lorem Ipsum',
                                        {
                                            tag: 'br'
                                        },
                                        'available, but the',
                                        {
                                            tag: 'br'
                                        },
                                        'majority have suffered alteration.'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: 'section',
                    block: 'projects',
                    content: [
                        {
                            tag: 'h2',
                            elem: 'title',
                            content: [
                                'Our',
                                {
                                    tag: 'br'
                                },
                                'RECENT projects'
                            ]
                        },
                        {
                            tag: 'p',
                            elem: 'paragraph',
                            content: [
                                'Lorem Ipsum is simply dummy text of the printing and typesetting',
                                {tag:'br'},
                                'industry.Lorem Ipsum is simply dummy text of the printing and',
                                {tag:'br'},
                                'typesetting industry.'
                            ]
                        },
                        {
                            tag: 'p',
                            elem: 'paragraph',
                            elemMods: { mobile: true },
                            content: [
                                'Lorem Ipsum is simply dummy',
                                {tag:'br'},
                                'text of the printing and typesetting',
                                {tag:'br'},
                                'industry.Lorem Ipsum is simply',
                                {tag:'br'},
                                'dummy text of the printing and',
                                {tag:'br'},
                                'typesetting industry.'
                            ]
                        },
                        {
                            tag: 'img',
                            elem: 'img',
                            elemMods: { headphones: true },
                            attrs: {src: '../../img/projects/headphones.png'}
                        },
                        {
                            tag: 'img',
                            elem: 'img',
                            elemMods: { book: true },
                            attrs: {src: '../../img/projects/book.png'}
                        },
                        {
                            tag: 'img',
                            elem: 'img',
                            elemMods: { jar: true },
                            attrs: {src: '../../img/projects/jar.png'}
                        },
                        {
                            tag: 'img',
                            elem: 'img',
                            elemMods: { album: true },
                            attrs: {src: '../../img/projects/album.png'}
                        },
                        {
                            tag: 'img',
                            elem: 'img',
                            elemMods: { bag: true },
                            attrs: {src: '../../img/projects/bag.png'}
                        },
                        {
                            tag: 'img',
                            elem: 'img',
                            elemMods: { booklet: true },
                            attrs: {src: '../../img/projects/booklet.png'}
                        }
                    ]
                },
                {
                    tag: 'div',
                    block: 'btn',
                    content: [
                        {
                            tag: 'button',
                            elem: 'btn-project',
                            content: [
                                'Load More'
                            ]
                        }
                    ]
                },
                {
                    tag: 'section',
                    block: 'team',
                    content: [
                        {
                            tag: 'h2',
                            elem: 'title',
                            content: [
                                'Our',{tag:'br'},'Team members'
                            ]
                        },
                        {
                            tag: 'p',
                            elem: 'paragraph',
                            content: [
                                'We are a small team of passionate, creative and digital marketers',
                                {tag:'br'},
                                'with big ambitions. We always look at the big picture and believe',
                                {tag:'br'},
                                'every business'
                            ]
                        },
                        {
                            tag: 'p',
                            elem: 'paragraph',
                            elemMods: {mobile: true},
                            content: [
                                'We are a small team of',
                                {tag:'br'},
                                'passionate, creative and digital',
                                {tag:'br'},
                                'marketers with big',
                                {tag:'br'},
                                'ambitions. We always look',
                                {tag:'br'},
                                'at the big picture and believe',
                                {tag:'br'},
                                'every business'
                            ]
                        },
                        {
                            elem: 'card',
                            elemMods: {one:true},
                            content: [
                                {
                                    elem: 'card-name',
                                    content: [
                                        {
                                            tag: 'h3',
                                            elem: 'card-title',
                                            content: [
                                                'MD ATIKUR RAHMAN'
                                            ]
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-facebook',
                                            elemMods:{facebook:true}
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-rss',
                                            elemMods:{rss:true}
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-twitter',
                                            elemMods:{twitter:true}
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-pinterest',
                                            elemMods:{pinterest:true}
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'card',
                            elemMods: {two:true},
                            content: [
                                {
                                    elem: 'card-name',
                                    content: [
                                        {
                                            tag: 'h3',
                                            elem: 'card-title',
                                            content: [
                                                'MD ATIKUR RAHMAN'
                                            ]
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-facebook',
                                            elemMods:{facebook:true}
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-rss',
                                            elemMods:{rss:true}
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-twitter',
                                            elemMods:{twitter:true}
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-pinterest',
                                            elemMods:{pinterest:true}
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'card',
                            elemMods: {three:true},
                            content: [
                                {
                                    elem: 'card-name',
                                    content: [
                                        {
                                            tag: 'h3',
                                            elem: 'card-title',
                                            content: [
                                                'MD ATIKUR RAHMAN'
                                            ]
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-facebook',
                                            elemMods:{facebook:true}
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-rss',
                                            elemMods:{rss:true}
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-twitter',
                                            elemMods:{twitter:true}
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-pinterest',
                                            elemMods:{pinterest:true}
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'card',
                            elemMods: {four:true},
                            content: [
                                {
                                    elem: 'card-name',
                                    content: [
                                        {
                                            tag: 'h3',
                                            elem: 'card-title',
                                            content: [
                                                'MD ATIKUR RAHMAN'
                                            ]
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-facebook',
                                            elemMods:{facebook:true}
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-rss',
                                            elemMods:{rss:true}
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-twitter',
                                            elemMods:{twitter:true}
                                        },
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-pinterest',
                                            elemMods:{pinterest:true}
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'team-description',
                    content: [
                        {
                            elem: 'js-viewport',
                            content: [
                                {
                                    elem: 'sliders',
                                    content: [
                                        {
                                            elem: 'sliders-slide',
                                            content: [
                                                {
                                                    tag:'img',
                                                    elem: 'wrapper-img',
                                                    attrs: {src:'../../img/team-description.png'}
                                                },
                                                {
                                                    tag: 'p',
                                                    elem: 'wrapper-paragraph',
                                                    content: [
                                                        'Designing is a matter of concentration. You go deep into what you want to do.',
                                                        {tag:'br'},
                                                        'It\'s about intensive research, really. The concentration is warm and',
                                                        {tag:'br'},
                                                        'intimate and like'
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'sliders-slide',
                                            content: [
                                                {
                                                    tag:'img',
                                                    elem: 'wrapper-img',
                                                    attrs: {src:'../../img/team-description.png'}
                                                },
                                                {
                                                    tag: 'p',
                                                    elem: 'wrapper-paragraph',
                                                    content: [
                                                        'Designing is a matter of concentration. You go deep into what you want to do.',
                                                        {tag:'br'},
                                                        'It\'s about intensive research, really. The concentration is warm and',
                                                        {tag:'br'},
                                                        'intimate and like'
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'sliders-slide',
                                            content: [
                                                {
                                                    tag:'img',
                                                    elem: 'wrapper-img',
                                                    attrs: {src:'../../img/team-description.png'}
                                                },
                                                {
                                                    tag: 'p',
                                                    elem: 'wrapper-paragraph',
                                                    content: [
                                                        'Designing is a matter of concentration. You go deep into what you want to do.',
                                                        {tag:'br'},
                                                        'It\'s about intensive research, really. The concentration is warm and',
                                                        {tag:'br'},
                                                        'intimate and like'
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'nav-btns',
                            content: [
                                {
                                    tag: 'i',
                                    elem: 'slideBtn',
                                    elemMods: {active:true},
                                    cls: 'icon-squarefill'
                                },
                                {
                                    tag: 'i',
                                    elem: 'slideBtn',
                                    cls: 'icon-squarefill'
                                },
                                {
                                    tag: 'i',
                                    elem: 'slideBtn',
                                    cls: 'icon-squarefill'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'brand',
                    content: [
                        {
                            elem: 'logo',
                            elemMods: {microsoft:true}
                        },
                        {
                            elem: 'logo',
                            elemMods: {envato:true}
                        },
                        {
                            elem: 'logo',
                            elemMods: {dribble:true}
                        },
                        {
                            elem: 'logo',
                            elemMods: {spotify:true}
                        },
                        {
                            elem: 'logo',
                            elemMods: {google:true}
                        }
                    ]
                },
                {
                    tag: 'section',
                    block: 'blog',
                    content: [
                        {
                            tag: 'h2',
                            elem: 'title',
                            content: ['Recent Blog']
                        },
                        {
                            elem: 'card',
                            content: [
                                {
                                    tag: 'img',
                                    elem: 'card-img',
                                    attrs: {src: '../../img/blog/blog_one.png'}
                                },
                                {
                                    tag: 'h3',
                                    elem: 'card-title',
                                    content: ['Lorem Ipsum is simply']
                                },
                                {
                                    tag: 'p',
                                    elem: 'card-paragraph',
                                    content:[
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    elem: 'card-date',
                                    content: [
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-clock'
                                        },
                                        ' Sep 10\’ 15'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    elem: 'card-number',
                                    content: [
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-comment-alt'
                                        },
                                        ' 5 Coments'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'card',
                            content: [
                                {
                                    tag: 'img',
                                    elem: 'card-img',
                                    attrs: {src: '../../img/blog/blog_two.png'}
                                },
                                {
                                    tag: 'h3',
                                    elem: 'card-title',
                                    content: ['Lorem Ipsum is simply']
                                },
                                {
                                    tag: 'p',
                                    elem: 'card-paragraph',
                                    content:[
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    elem: 'card-date',
                                    content: [
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-clock'
                                        },
                                        ' Sep 10\’ 15'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    elem: 'card-number',
                                    content: [
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-comment-alt'
                                        },
                                        ' 5 Coments'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'card',
                            content: [
                                {
                                    tag: 'img',
                                    elem: 'card-img',
                                    attrs: {src: '../../img/blog/blog_three.png'}
                                },
                                {
                                    tag: 'h3',
                                    elem: 'card-title',
                                    content: ['Lorem Ipsum is simply']
                                },
                                {
                                    tag: 'p',
                                    elem: 'card-paragraph',
                                    content:[
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    elem: 'card-date',
                                    content: [
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-clock'
                                        },
                                        ' Sep 10\’ 15'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    elem: 'card-number',
                                    content: [
                                        {
                                            tag: 'i',
                                            elem: 'card-icon',
                                            cls: 'icon-comment-alt'
                                        },
                                        ' 5 Coments'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: 'section',
                    block: 'contact',
                    content: [
                        {
                            tag: 'h2',
                            elem: 'title',
                            content: ['Don’t be shy, Say Hello!']
                        },
                        {
                            tag: 'form',
                            elem: 'form',
                            content: [
                                {
                                    tag: 'input',
                                    elem: 'form-input',
                                    attrs: {type: 'text', placeholder: 'Name'}
                                },
                                {
                                    tag: 'input',
                                    elem: 'form-input',
                                    attrs: {type: 'email', placeholder: 'Email'}
                                },
                                {
                                    tag: 'textarea',
                                    elem: 'form-textarea',
                                    attrs: {placeholder: 'Message'}
                                },
                                {
                                    tag: 'button',
                                    elem: 'form-submit',
                                    content: ['Send']
                                }
                            ]
                        },
                        {
                            elem: 'office',
                            content: [
                                {
                                    tag: 'h2',
                                    elem: 'office-title',
                                    content:['Our Office']
                                },
                                {
                                    tag: 'p',
                                    elem: 'office-paragraph',
                                    elemMods: {first:true},
                                    content: [
                                        {
                                            tag: 'i',
                                            elem: 'office-icon',
                                            cls: 'icon-home'
                                        },
                                        {
                                            tag:'span',
                                            elem: 'home',
                                            content: [
                                                'Kandintie 16 3/B',
                                                {tag:'br'},
                                                'Oulu,  Finland'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    tag: 'p',
                                    elem: 'office-paragraph',
                                    content: [
                                        {
                                            tag: 'i',
                                            elem: 'office-icon',
                                            cls: 'icon-phone'
                                        },
                                        '+358465657634'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    elem: 'office-paragraph',
                                    content: [
                                        {
                                            tag: 'i',
                                            elem: 'office-icon',
                                            cls: 'icon-mail-alt'
                                        },
                                        'atikur.ux@gmail.com'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: 'section',
                    block: 'business',
                    content: [
                        {
                            tag: 'h2',
                            elem: 'title',
                            content: ['GO BUSINESS']
                        },
                        {
                            tag: 'i',
                            elem: 'icon',
                            cls: 'icon-facebook'
                        },
                        {
                            tag: 'i',
                            elem: 'icon',
                            cls: 'icon-rss'
                        },
                        {
                            tag: 'i',
                            elem: 'icon',
                            cls: 'icon-twitter'
                        },
                        {
                            tag: 'i',
                            elem: 'icon',
                            cls: 'icon-pinterest'
                        },
                        {
                            tag: 'i',
                            elem: 'icon',
                            cls: 'icon-dribbble'
                        },
                        {
                            tag: 'i',
                            elem: 'icon',
                            cls: 'icon-vimeo'
                        }
                    ]
                }
            ]
        },
        {
            tag: 'footer',
            block: 'footer',
            content: [
                {
                    tag: 'p',
                    elem: 'paragraph',
                    content: ['Copyright 2016 by atik Rahman. All Rights Reserved.']
                }
            ]
        }
    ]
};
