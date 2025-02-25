import { View } from 'react-native';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Input, InputField } from '@/components/ui/input';
import { Link, LinkText } from '@/components/ui/link';
import { Divider } from '@/components/ui/divider';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function SignInScreen () {
  return (
    <View>
      <Box className="p-6 flex-1 justify-center">
        <VStack space="xl">
          <VStack space="xs">
            <Heading size="2xl">Welcome Back</Heading>
            <Text>Sign in to continue</Text>
          </VStack>

          <VStack space="md">
            <Input className="border border-primary-500">
              <InputField placeholder="Email" className="text-text-primary" />
            </Input>
            <Input className="border border-primary-500">
              <InputField placeholder="Password" type="password" className="text-text-primary" />
            </Input>
            <Link>
              <LinkText>Forgot Password?</LinkText>
            </Link>
          </VStack>

          <Button
            onPress={() => router.replace('/(tabs)')}
            className="bg-primary"
          >
            <ButtonText>Sign In</ButtonText>
          </Button>

          <VStack space="lg">
            <HStack space="sm">
              <Divider flex={1} className="bg-border-light" />
              <Text className="text-text-tertiary">OR</Text>
              <Divider flex={1} className="bg-border-light" />
            </HStack>

            <VStack space="md">
              <Button
                variant="outline"
                className="border-primary-500"
              >
                <HStack space="sm">
                  <FontAwesome name="google" size={20} />
                  <ButtonText className="text-text-primary">Continue with Google</ButtonText>
                </HStack>
              </Button>

              <Button
                variant="outline"
                className="border-primary-500"
              >
                <HStack space="sm">
                  <FontAwesome name="facebook" size={20} />
                  <ButtonText className="text-text-primary">Continue with Facebook</ButtonText>
                </HStack>
              </Button>

              <Button
                variant="outline"
                className="border-primary-500"
              >
                <HStack space="sm">
                  <FontAwesome name="twitter" size={20} />
                  <ButtonText>Continue with Twitter</ButtonText>
                </HStack>
              </Button>
            </VStack>
          </VStack>

          <HStack space="xs">
            <Text>Don&apos;t have an account?</Text>
            <Button
              onPress={() => router.push('/sign-up')}
              variant="link"
            >
              <ButtonText>Sign Up</ButtonText>
            </Button>
          </HStack>
        </VStack>
      </Box>
    </View>
  );
}
