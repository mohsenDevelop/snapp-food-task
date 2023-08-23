import { Container } from '@uiKits/container';
import { VStack } from '@uiKits/stack';
import RestaurantPreview from '@container/restaurant/preview';

const HomeConatiner = () => {
    return (
        <Container>
            <VStack
                style={{
                    padding: '16px 0px',
                    gap: '24px'
                }}
            >
                <RestaurantPreview />
                <RestaurantPreview />
            </VStack>
        </Container>
    );
};

export default HomeConatiner;