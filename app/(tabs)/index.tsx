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

export default function HomeScreen () {
  // Sample activity data
  const activities = [
    {
      id   : 1,
      type : 'match',
      name : 'Emma Wilson',
      time : '2 hours ago',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    },
    {
      id     : 2,
      type   : 'message',
      name   : 'Michael Johnson',
      time   : '5 hours ago',
      preview: 'Hey, I saw we both like hiking. Have you tried the new trail at...',
      image  : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6'
    },
    {
      id   : 3,
      type : 'like',
      name : 'Sophie Taylor',
      time : 'Yesterday',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
    }
  ];

  return (
    <View>
      <ScrollView>
        <Box className="p-4">
          <VStack space="lg">
            {/* Welcome Section */}
            <VStack>
              <Heading size="xl">Welcome back</Heading>
              <Text className=" mt-1">Your AI-powered dating assistant is ready to help</Text>
            </VStack>

            {/* Profile Completion */}
            <Card className="border border-primary-500">
              <Box className="p-4 border-b border-primary-500">
                <Heading size="md">Profile Completion</Heading>
              </Box>
              <Box className="p-4">
                <HStack className="justify-between mb-2">
                  <Text>Your profile is 75% complete</Text>
                  <Text className="font-bold">75%</Text>
                </HStack>
                <Progress value={75} className="w-full bg-bg-tertiary mb-4">
                  <ProgressFilledTrack className="bg-primary-500" />
                </Progress>
                <Text className="mb-4">
                  Complete your profile to get 50% more matches and improve AI recommendations.
                </Text>
                <Button className="bg-primary-600">
                  <ButtonText>Complete Profile</ButtonText>
                </Button>
              </Box>
            </Card>

            {/* Today's Matches */}
            <Card className="border border-primary-500">
              <Box className="p-4 border-b border-primary-500">
                <HStack className="justify-between items-center">
                  <Heading size="md">Today&apos;s Matches</Heading>
                  <Text className="text-primary-600">View All</Text>
                </HStack>
              </Box>
              <Box className="p-4">
                <Text className="mb-4">
                  Our AI has found 3 new potential matches based on your preferences and behavior.
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <HStack space="md" className="py-2">
                    {[1, 2, 3].map(i => (
                      <VStack key={i} className="items-center mr-4">
                        <Avatar size="xl" className="mb-2">
                          <AvatarImage
                            source={{
                              uri: `https://images.unsplash.com/photo-${
                                // eslint-disable-next-line max-len, no-nested-ternary
                                i === 1 ? '1494790108377-be9c29b29330' : i === 2 ? '1539571696357-5a69c17a67c6' : '1517841905240-472988babdf9'
                              }`
                            }}
                          />
                        </Avatar>
                        <Text className="font-bold">
                          {/* eslint-disable-next-line no-nested-ternary */}
                          {i === 1 ? 'Sarah, 27' : i === 2 ? 'Michael, 29' : 'Emma, 26'}
                        </Text>
                        <Text className="text-sm mb-2">
                          {/* eslint-disable-next-line no-nested-ternary */}
                          {i === 1 ? '85% Match' : i === 2 ? '78% Match' : '92% Match'}
                        </Text>
                        <Button size="sm" className="bg-primary-600">
                          <ButtonText>View Profile</ButtonText>
                        </Button>
                      </VStack>
                    ))}
                  </HStack>
                </ScrollView>
              </Box>
            </Card>

            {/* Recent Activity */}
            <VStack space="md">
              <Heading size="lg">Recent Activity</Heading>

              {activities.map(activity => (
                <Card key={activity.id} className="border border-primary-500">
                  <Box className="p-4">
                    <HStack space="md">
                      <Avatar size="md">
                        <AvatarImage source={{ uri: activity.image }} />
                      </Avatar>
                      <VStack className="flex-1">
                        <HStack className="justify-between w-full">
                          <Text className="font-bold">{activity.name}</Text>
                          <Text className="text-sm">{activity.time}</Text>
                        </HStack>

                        {activity.type === 'match' && (
                          <Text>You matched with {activity.name}</Text>
                        )}

                        {activity.type === 'message' && (
                          <Text numberOfLines={1}>{activity.preview}</Text>
                        )}

                        {activity.type === 'like' && (
                          <Text>
                            {activity.name} liked your profile
                          </Text>
                        )}

                        <HStack className="mt-2">
                          {activity.type === 'match' && (
                            <>
                              <Button size="sm" className="bg-primary-600 mr-2">
                                <ButtonText>Message</ButtonText>
                              </Button>
                              <Button size="sm" variant="outline">
                                <ButtonText>View Profile</ButtonText>
                              </Button>
                            </>
                          )}

                          {activity.type === 'message' && (
                            <Button size="sm" className="bg-primary-600">
                              <ButtonText>Reply</ButtonText>
                            </Button>
                          )}

                          {activity.type === 'like' && (
                            <>
                              <Button size="sm" className="bg-primary-600 mr-2">
                                <ButtonText>Like Back</ButtonText>
                              </Button>
                              <Button size="sm" variant="outline">
                                <ButtonText>View Profile</ButtonText>
                              </Button>
                            </>
                          )}
                        </HStack>
                      </VStack>
                    </HStack>
                  </Box>
                </Card>
              ))}
            </VStack>

            {/* AI Dating Tips */}
            <Card className="border border-primary-500">
              <Box className="p-4 border-b border-primary-500">
                <Heading size="md">AI Dating Tip</Heading>
              </Box>
              <Box className="p-4">
                <Text className="mb-3">
                  Based on your recent conversations, try asking open-ended questions to keep the conversation flowing.
                </Text>
                <Box className="bg-bg-tertiary p-3 rounded mb-3">
                  <Text className="italic">
                    {/* eslint-disable-next-line max-len */}
                    &quot;What&apos;s the most interesting place you&apos;ve traveled to, and what made it special?&quot;
                  </Text>
                </Box>
                <Button className="bg-primary-600">
                  <ButtonText>Get More Tips</ButtonText>
                </Button>
              </Box>
            </Card>
          </VStack>
        </Box>
      </ScrollView>
    </View>
  );
}
