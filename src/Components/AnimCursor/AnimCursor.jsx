import AnimatedCursor from 'react-animated-cursor';

const AnimCursor = () => {
    return (
        <div>
            <AnimatedCursor
            innerSize={20}
            outerSize={10}
            color='2, 148, 232'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            trailingSpeed={1}
            showSystemCursor={true}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link'
            ]}
            />
        </div>
    );
};

export default AnimCursor;