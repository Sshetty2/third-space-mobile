import { View, ScrollView } from 'react-native';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';

export default function CommunityScreen () {
  // Sample community events
  const events = [
    {
      id       : 1,
      title    : 'Singles Mixer',
      location : 'Downtown Coffee House',
      date     : 'Sat, Oct 15 • 7:00 PM',
      attendees: 24,
      image    : 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622'
    },
    {
      id       : 2,
      title    : 'Speed Dating Night',
      location : 'The Social Club',
      date     : 'Fri, Oct 21 • 8:00 PM',
      attendees: 36,
      image    : 'https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28'
    },
    {
      id       : 3,
      title    : 'Hiking Group',
      location : 'Mountain Trail Park',
      date     : 'Sun, Oct 23 • 9:00 AM',
      attendees: 12,
      image    : 'https://images.unsplash.com/photo-1551632811-561732d1e306'
    }
  ];

  // Sample groups
  const groups = [
    {
      id     : 1,
      name   : 'Photography Enthusiasts',
      members: 156,
      image  : 'https://images.unsplash.com/photo-1554080353-a576cf803bda'
    },
    {
      id     : 2,
      name   : 'Foodies Club',
      members: 243,
      image  : 'https://images.unsplash.com/photo-1528605248644-14dd04022da1'
    },
    {
      id     : 3,
      name   : 'Fitness & Wellness',
      members: 189,
      image  : 'https://images.unsplash.com/photo-1518611012118-696072aa579a'
    }
  ];

  return (
    <View>
      <ScrollView>
        <Box className="p-4">
          <VStack space="lg">
            <Heading size="xl">Community</Heading>

            {/* Events Section */}
            <VStack space="md">
              <HStack className="justify-between items-center">
                <Heading size="lg">Upcoming Events</Heading>
                <Button variant="link" className="p-0">
                  <ButtonText>View All</ButtonText>
                </Button>
              </HStack>

              {events.map(event => (
                <Card key={event.id} className="border border-primary-500 overflow-hidden">
                  <Box className="h-40 w-full">
                    <Box
                      className="h-full w-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${event.image})`,
                        height         : 160,
                        width          : '100%'
                      }}
                    />
                  </Box>
                  <Box className="p-4">
                    <Heading size="md">{event.title}</Heading>
                    <Text className="mt-1">{event.location}</Text>
                    <Text className="mt-1">{event.date}</Text>
                    <HStack className="mt-3 justify-between items-center">
                      <Text>{event.attendees} attending</Text>
                      <Button size="sm" variant="solid" action="primary">
                        <ButtonText>RSVP</ButtonText>
                      </Button>
                    </HStack>
                  </Box>
                </Card>
              ))}
            </VStack>

            {/* Groups Section */}
            <VStack space="md" className="mt-4">
              <HStack className="justify-between items-center">
                <Heading size="lg">Groups</Heading>
                <Button variant="link" className="p-0">
                  <ButtonText>View All</ButtonText>
                </Button>
              </HStack>

              {groups.map(group => (
                <Card key={group.id} className="border border-primary-500">
                  <Box className="p-4">
                    <HStack space="md">
                      <Avatar size="lg">
                        <AvatarImage source={{ uri: group.image }} />
                      </Avatar>
                      <VStack className="flex-1 justify-center">
                        <Heading size="sm">{group.name}</Heading>
                        <Text>{group.members} members</Text>
                      </VStack>
                      <Button size="sm" variant="solid" action="primary">
                        <ButtonText>Join</ButtonText>
                      </Button>
                    </HStack>
                  </Box>
                </Card>
              ))}
            </VStack>

            {/* AI Matchmaking Event */}
            <Card className="mt-4 border border-primary-500">
              <Box className="p-4 border-b border-primary-500">
                <Heading size="md">AI-Powered Matchmaking Event</Heading>
              </Box>
              <Box className="p-4">
                <Text className="mb-2">
                  {/* eslint-disable-next-line max-len */}
                  Join our exclusive event where our AI matches you with compatible partners for meaningful conversations.
                </Text>
                <HStack className="mt-4 justify-between items-center">
                  <Text className="font-bold">Oct 30 • 7:00 PM</Text>
                  <Button variant="solid" action="primary">
                    <ButtonText>Register</ButtonText>
                  </Button>
                </HStack>
              </Box>
            </Card>
          </VStack>
        </Box>
      </ScrollView>
    </View>
  );
}
