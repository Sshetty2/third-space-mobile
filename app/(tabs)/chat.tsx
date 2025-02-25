import { View, ScrollView } from 'react-native';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Input, InputField } from '@/components/ui/input';

export default function ChatScreen () {
  // Sample chat data
  const chats = [
    {
      id         : 1,
      name       : 'Sarah Parker',
      avatar     : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      lastMessage: 'Looking forward to our coffee date tomorrow!',
      time       : '2:30 PM',
      unread     : 2
    },
    {
      id         : 2,
      name       : 'Michael Johnson',
      avatar     : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
      lastMessage: 'The AI suggested we might be compatible. Want to chat?',
      time       : 'Yesterday',
      unread     : 0
    },
    {
      id         : 3,
      name       : 'Emma Wilson',
      avatar     : 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      lastMessage: 'Thanks for the great conversation!',
      time       : 'Monday',
      unread     : 0
    }
  ];

  return (
    <View>
      <ScrollView>
        <Box className="p-4">
          <VStack space="md">
            <Heading size="xl" className="mb-2">Messages</Heading>

            {/* Search */}
            <Box className="mb-4">
              <Input className="bg-bg-secondary border border-primary-500 rounded-lg">
                <InputField placeholder="Search conversations" />
              </Input>
            </Box>

            {/* Chat list */}
            <VStack space="md">
              {chats.map(chat => (
                <Card key={chat.id} className="border border-primary-500">
                  <Box className="p-4">
                    <HStack space="md" className="items-center">
                      <Avatar size="md">
                        <AvatarImage source={{ uri: chat.avatar }} />
                      </Avatar>
                      <VStack className="flex-1">
                        <HStack className="justify-between w-full">
                          <Text className="font-bold">{chat.name}</Text>
                          <Text className="text-sm">{chat.time}</Text>
                        </HStack>
                        <Text numberOfLines={1}>{chat.lastMessage}</Text>
                      </VStack>
                      {chat.unread > 0 && (
                        <Box className="bg-primary-600 h-6 w-6 rounded-full items-center justify-center">
                          <Text className="text-xs font-bold">{chat.unread}</Text>
                        </Box>
                      )}
                    </HStack>
                  </Box>
                </Card>
              ))}
            </VStack>

            {/* New matches */}
            <Box className="mt-4">
              <Heading size="lg" className="mb-2">New Matches</Heading>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <HStack space="md" className="py-2">
                  {[1, 2, 3, 4].map(i => (
                    <VStack key={i} className="items-center">
                      <Avatar size="lg" className="mb-2">
                        <AvatarImage
                          source={{
                            uri: `https://images.unsplash.com/photo-${
                              // eslint-disable-next-line max-len, no-nested-ternary
                              i === 1 ? '1517841905240-472988babdf9' : i === 2 ? '1539571696357-5a69c17a67c6' : i === 3 ? '1534528741775-53994a69daeb' : '1494790108377-be9c29b29330'
                            }`
                          }}
                        />
                      </Avatar>
                      {/* eslint-disable-next-line no-nested-ternary */}
                      <Text>{i === 1 ? 'Emma' : i === 2 ? 'Michael' : i === 3 ? 'Sophie' : 'Jessica'}</Text>
                      <Button size="xs" variant="solid" action="primary">
                        <ButtonText>Message</ButtonText>
                      </Button>
                    </VStack>
                  ))}
                </HStack>
              </ScrollView>
            </Box>

            {/* AI Suggestions */}
            <Card className="mt-4 border border-primary-500">
              <Box className="p-4 border-b border-primary-500">
                <Heading size="md">AI Conversation Starter</Heading>
              </Box>
              <Box className="p-4">
                <Text className="mb-2">
                  Based on your shared interests in photography and travel, try asking:
                </Text>
                <Text className="italic">
                  &quot;I noticed you&apos;ve traveled to Japan. What was your favorite photography spot there?&quot;
                </Text>
                <Button className="mt-4 bg-primary-600">
                  <ButtonText className="text-text-inverse">Use This Starter</ButtonText>
                </Button>
              </Box>
            </Card>
          </VStack>
        </Box>
      </ScrollView>
    </View>
  );
}
