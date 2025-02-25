import { View, ScrollView } from 'react-native';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Input, InputField, InputIcon } from '@/components/ui/input';
import { FontAwesome } from '@expo/vector-icons';

export default function ExploreScreen () {
  // Sample profiles
  const profiles = [
    {
      id       : 1,
      name     : 'Jessica, 27',
      bio      : 'Photographer and travel enthusiast. Love hiking and trying new cuisines.',
      distance : '2 miles away',
      interests: ['Photography', 'Travel', 'Hiking', 'Food'],
      image    : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    {
      id       : 2,
      name     : 'Michael, 29',
      bio      : 'Software engineer by day, musician by night. Looking for someone to share adventures with.',
      distance : '5 miles away',
      interests: ['Music', 'Technology', 'Outdoors', 'Movies'],
      image    : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6'
    },
    {
      id       : 3,
      name     : 'Emma, 26',
      bio      : 'Yoga instructor and bookworm. Passionate about wellness and meaningful conversations.',
      distance : '3 miles away',
      interests: ['Yoga', 'Reading', 'Wellness', 'Art'],
      image    : 'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    }
  ];

  return (
    <View>
      <ScrollView>
        <Box className="p-4">
          <VStack space="lg">
            <Heading size="xl">Explore</Heading>

            {/* Search and Filter */}
            <Box className="mb-2">
              <Input className="border border-primary-500 rounded-lg mb-4">
                <InputIcon>
                  <FontAwesome name="search" size={16} />
                </InputIcon>
                <InputField placeholder="Search by interests, location..." />
              </Input>

              <HStack space="sm" className="flex-wrap">
                {['Nearby', 'Recently Active', 'New Members', 'Most Compatible'].map((filter, i) => (
                  <Button
                    key={i}
                    variant="solid"
                    size="sm"
                    className="border-primary-500 mb-2"
                  >
                    <ButtonText>{filter}</ButtonText>
                  </Button>
                ))}
              </HStack>
            </Box>

            {/* AI Match of the Day */}
            <Card className="border border-primary-500 mb-4">
              <Box className="p-4 border-b border-primary-500">
                <HStack className="justify-between items-center">
                  <Heading size="md">AI Match of the Day</Heading>
                  <Box className="bg-primary px-2 py-1 rounded">
                    <Text className="text-xs font-bold">95% Match</Text>
                  </Box>
                </HStack>
              </Box>
              <Box className="p-4">
                <HStack space="md">
                  <Avatar size="xl">
                    <AvatarImage source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' }} />
                  </Avatar>
                  <VStack className="flex-1">
                    <Heading size="sm">Sophie, 28</Heading>
                    <Text className="mb-2">4 miles away</Text>
                    <Text numberOfLines={2}>
                      {/* eslint-disable-next-line max-len */}
                      Artist and nature lover. Our AI thinks you&apos;d connect over your shared interest in photography and outdoor activities.
                    </Text>
                    <HStack className="mt-3">
                      <Button className="bg-primary-600 flex-1 mr-2">
                        <ButtonText>Connect</ButtonText>
                      </Button>
                      <Button variant="outline" className="flex-1 border-border-medium">
                        <ButtonText>Skip</ButtonText>
                      </Button>
                    </HStack>
                  </VStack>
                </HStack>
              </Box>
            </Card>

            {/* Discover Profiles */}
            <VStack space="md">
              <Heading size="lg">Discover</Heading>

              {profiles.map(profile => (
                <Card key={profile.id} className="border border-primary-500">
                  <Box className="h-48 w-full">
                    <Box
                      className="h-full w-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${profile.image})`,
                        height         : 192,
                        width          : '100%'
                      }}
                    />
                  </Box>
                  <Box className="p-4">
                    <HStack className="justify-between items-center mb-2">
                      <Heading size="md">{profile.name}</Heading>
                      <Text>{profile.distance}</Text>
                    </HStack>
                    <Text numberOfLines={2}>
                      {profile.bio}
                    </Text>
                    <HStack className="flex-wrap">
                      {profile.interests.map((interest, i) => (
                        <Box
                          key={i}
                          className="px-2 py-1 rounded mr-2 mb-2"
                        >
                          <Text className="text-xs">{interest}</Text>
                        </Box>
                      ))}
                    </HStack>
                    <HStack className="mt-3">
                      <Button className="flex-1 mr-2">
                        <ButtonText>Like</ButtonText>
                      </Button>
                      <Button variant="outline" className="flex-1 border-primary-200">
                        <ButtonText>Pass</ButtonText>
                      </Button>
                    </HStack>
                  </Box>
                </Card>
              ))}
            </VStack>

            {/* AI Insights */}
            <Card className="mt-4 border border-primary-500">
              <Box className="p-4 border-b border-primary-500">
                <Heading size="md">AI Insights</Heading>
              </Box>
              <Box className="p-4">
                <Text className="mb-3">
                  {/* eslint-disable-next-line max-len */}
                  Based on your activity, our AI suggests you might connect better with people who share these interests:
                </Text>
                <HStack className="flex-wrap mb-3">
                  {['Photography', 'Travel', 'Art', 'Music'].map((interest, i) => (
                    <Box
                      key={i}
                      className="px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      <Text className="text-sm">{interest}</Text>
                    </Box>
                  ))}
                </HStack>
                <Button className="mt-2">
                  <ButtonText>Update Preferences</ButtonText>
                </Button>
              </Box>
            </Card>
          </VStack>
        </Box>
      </ScrollView>
    </View>
  );
}
