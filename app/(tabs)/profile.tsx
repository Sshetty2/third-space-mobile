import { View, ScrollView } from 'react-native';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function ProfileScreen () {
  return (
    <View>
      <ScrollView>
        <Box className="p-4">
          <VStack space="lg" className="items-center">
            <Avatar size="2xl">
              <AvatarImage source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }} />
            </Avatar>

            <VStack className="items-center">
              <Heading size="xl">Sarah Parker</Heading>
              <Text>AI Optimized Profile</Text>
            </VStack>

            {/* Credit Balance */}
            <Card className="w-full">
              {/* Card Content */}
              <Box className="p-4">
                <HStack className="justify-between items-center">
                  <VStack>
                    <Text size="sm">Credit Balance</Text>
                    <Heading size="xl">85</Heading>
                  </VStack>
                  <Button size="sm" variant="solid" action="primary">
                    <ButtonText>Add Credits</ButtonText>
                  </Button>
                </HStack>
              </Box>
            </Card>

            {/* Theme Switcher */}
            <Card className="w-full">
              {/* Card Header */}
              <Box className="p-4 border-b border-primary-500">
                <Heading size="lg">Appearance</Heading>
              </Box>

              {/* Card Content */}
              <ThemeSwitcher />
            </Card>

            {/* Profile Completion */}
            <Card className="w-full">
              {/* Card Header */}
              <Box className="p-4 border-b border-primary-500">
                <Heading size="lg">Profile Completion</Heading>
              </Box>

              {/* Card Content */}
              <Box className="p-4">
                <VStack space="md">
                  <HStack className="justify-between">
                    <Text>Overall Progress</Text>
                    <Text>85%</Text>
                  </HStack>
                  <Progress value={85} className="w-full">
                    <ProgressFilledTrack />
                  </Progress>
                  <Button variant="solid" action="primary" className="w-full">
                    <ButtonText>Complete Profile</ButtonText>
                  </Button>
                </VStack>
              </Box>
            </Card>

            {/* AI Coaching */}
            <Card className="w-full">
              {/* Card Header */}
              <Box className="p-4 border-b border-primary-500">
                <Heading size="lg">AI Dating Coach</Heading>
              </Box>

              {/* Card Content */}
              <Box className="p-4">
                <VStack space="md">
                  <Text >Get personalized dating advice and profile optimization</Text>
                  <Button variant="solid" action="primary" className="w-full">
                    <ButtonText>Start Coaching Session</ButtonText>
                  </Button>
                </VStack>
              </Box>
            </Card>

            {/* Settings */}
            <Card className="w-full">
              {/* Card Header */}
              <Box className="p-4 border-b border-primary-500">
                <Heading size="lg">Settings</Heading>
              </Box>

              {/* Card Content */}
              <Box className="p-4">
                <VStack space="md">
                  {['Privacy', 'Notifications', 'Account', 'Help & Support'].map((item, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      action="secondary"
                      className="w-full justify-start"
                    >
                      <ButtonText >{item}</ButtonText>
                    </Button>
                  ))}
                </VStack>
              </Box>
            </Card>
          </VStack>
        </Box>
      </ScrollView>
    </View>
  );
}
