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
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

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
    primary: 'red',
    secondary: 'blue'
}, {
    primary: 'Fira Mono',
    secondary: { name: 'Fira Mono', googleFont: true, styles: ['400', '700'] }
});

class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={['slide']} transitionDuration={500}>
                    <Slide transition={['slide']} bgColor='primary'>
                        <Heading size={4} lineHeight={1} textColor='#4A4A4A'>
                            webpack 2
                        </Heading>
                        <Heading size={5}>
                            &
                        </Heading>
                        <Heading size={2} caps lineHeight={1} textColor='black'>
                            Async/Await
                        </Heading>
                    </Slide>

                    <Slide transition={['slide']} bgColor='primary'>

                        <Link href='https://github.com/FormidableLabs/spectacle'>
                            <Text bold caps textColor='tertiary'>View on Github</Text>
                        </Link>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}

export default Presentation;
