import { Container } from '@uiKits/container';
import { VStack } from '@uiKits/stack';
import VendorPreview from '@container/vendor/preview';

const HomeConatiner = () => {
    return (
        <Container>
            <VStack
                style={{
                    padding: '16px 0px',
                    gap: '24px'
                }}
            >
                <VendorPreview />
                <VendorPreview />
            </VStack>
        </Container>
    );
};

export default HomeConatiner;