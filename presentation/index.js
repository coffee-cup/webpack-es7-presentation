// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import markdown from './markdown';

// Import custom component
// import Interactive from '../assets/interactive';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
    city: require('../assets/city.jpg'),
    kat: require('../assets/kat.png'),
    logo: require('../assets/formidable-logo.svg'),
    markdown: require('../assets/markdown.png')
};

preloader(images);

const theme = createTheme({
    primary: '#F4F4F4',
    secondary: '#333333',
    quartenary: '#333333'
}, {
    primary: 'Merriweather',
    secondary: { name: 'Fira Mono', googleFont: true, styles: ['400', '700'] }
});

class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck
                    transition={['slide']}
                    transitionDuration={500}
                    bgColor='background'
                    progress='bar'>
                    <Slide>
                        <Heading size={4} lineHeight={1.5} textColor='secondary'>
                            webpack Ⅱ
                        </Heading>
                        <Heading size={6} lineHeight={1.5} textColor='secondary'>
                            &
                        </Heading>
                        <Heading size={4} lineHeight={1.5} textColor='secondary'>
                            async / await
                        </Heading>
                    </Slide>

                    <Slide className='title'>
                        <div className='content' dangerouslySetInnerHTML={{__html: markdown.title}}></div>
                    </Slide>

                    <Slide className='second'>
                        <div className='markdown-body' dangerouslySetInnerHTML={{__html: markdown.second}}></div>
                    </Slide>

                    <Slide className='footer'>
                        <Link href='https://github.com/FormidableLabs/spectacle'>
                            <Text textColor='secondary'>Footer</Text>
                        </Link>
                    </Slide>


                </Deck>
            </Spectacle>
        );
    }
}

export default Presentation;
