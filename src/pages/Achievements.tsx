import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Card,
  CardBody,
  Badge,
  Flex,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  VscStarFull,
  VscCalendar,
  VscCode,
  VscMortarBoard,
  VscGlobe,
  VscTarget,
  VscLinkExternal,
} from "react-icons/vsc";
import { FaTrophy, FaStar, FaBolt } from "react-icons/fa";

interface Achievement {
  id: number;
  title: string;
  year: string;
  issuer: string;
  description: string;
  category: string;
  icon: React.ElementType;
  color: string;
  skills: string[];
  badge: string;
}

interface Props {
  setPage: (page: string) => void;
}

const AchievementsPage = ({ setPage }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

  // Color mode values
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const mutedTextColor = useColorModeValue("gray.600", "gray.400");

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Frontend Development Certification",
      year: "2025",
      issuer: "United Latino Students Association",
      description:
        "Issued for demonstrated excellence in JavaScript, Node.js, and UI/UX principles.",
      category: "Certification",
      icon: VscCode,
      color: "blue",
      skills: ["JavaScript", "Node.js", "UI/UX Design"],
      badge: "🏆",
    },
    {
      id: 2,
      title: "Algoverse AI Research Fellow",
      year: "Summer 2025",
      issuer: "Algoverse AI Research Program",
      description:
        "Selected for the highly competitive Algoverse AI Research Program. Contributing to LLM and Applied ML research under expert mentorship, with work targeting arXiv, NeurIPS, and EMNLP.",
      category: "Research Fellowship",
      icon: VscMortarBoard,
      color: "purple",
      skills: ["LLM", "Applied ML", "Research"],
      badge: "🧠",
    },
    {
      id: 3,
      title: "Harvard Venture TECH Summer Program",
      year: "2025",
      issuer: "Harvard University",
      description:
        "Special Invitee — selected among top 1% of global student innovators for excellence in product, AI and full-stack development.",
      category: "Special Program",
      icon: FaTrophy,
      color: "red",
      skills: ["Product Development", "Frontend", "Innovation"],
      badge: "🎯",
    },
    {
      id: 4,
      title: "University of Oxford Summer Program",
      year: "2023",
      issuer: "St. Anne's College, Oxford",
      description:
        "Completed Summer Program at St. Anne's College with 1st Class standing. Recognized for academic performance in AI, cybersecurity, and networking.",
      category: "Academic Excellence",
      icon: VscStarFull,
      color: "green",
      skills: ["AI", "Cybersecurity", "Networking"],
      badge: "🎓",
    },
    {
      id: 5,
      title: "MetaHack Global Hackathon",
      year: "2022",
      issuer: "Meta",
      description:
        "Top 10,000 out of 30+ countries; awarded full scholarship for front-end innovation in immersive tech.",
      category: "Hackathon",
      icon: VscGlobe,
      color: "cyan",
      skills: ["Frontend", "Immersive Tech", "Innovation"],
      badge: "🌐",
    },
    {
      id: 6,
      title: "BrightCHAMPS Discovery Challenge",
      year: "2021",
      issuer: "BrightCHAMPS",
      description:
        "Ranked in top 10% among 10,000+ participants for excellence in programming and algorithmic thinking.",
      category: "Programming Contest",
      icon: FaBolt,
      color: "yellow",
      skills: ["Programming", "Algorithms", "Problem Solving"],
      badge: "⚡",
    },
    {
      id: 7,
      title: "International Youth Math Challenge",
      year: "2021",
      issuer: "International Math Organization",
      description:
        "Placed in the top 10% globally (12,000+ students) for mathematical reasoning and problem-solving.",
      category: "Mathematics",
      icon: VscTarget,
      color: "teal",
      skills: ["Mathematical Reasoning", "Problem Solving", "Logic"],
      badge: "🧮",
    },
  ];

  const categories = [...new Set(achievements.map((a) => a.category))];

  const handleAchievementClick = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    onOpen();
  };

  React.useEffect(() => {
    setPage("achievements.tsx");
  }, [setPage]);

  return (
    <Box bg={bgColor} minH="100vh" py={8} px={6}>
      <Container maxW="7xl">
        {/* Header */}
        <Box mb={8}>
          <Flex align="center" gap={3} mb={4}>
            <Box
              w={8}
              h={8}
              borderRadius="full"
              bg="linear-gradient(135deg, #00D4AA, #0EA5E9)"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FaTrophy} w={5} h={5} color="white" />
            </Box>
            <Heading
              size="2xl"
              bgGradient="linear(to-r, cyan.400, blue.400)"
              bgClip="text"
            >
              Achievements
            </Heading>
          </Flex>
          <Text color={mutedTextColor} fontSize="lg">
            A collection of certifications, awards, and recognitions earned
            throughout my academic and professional journey.
          </Text>
        </Box>

        {/* Stats */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
          gap={4}
          mb={8}
        >
          <Card bg={cardBg} borderColor={borderColor} borderWidth="1px">
            <CardBody>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text color={mutedTextColor} fontSize="sm">
                    Total Achievements
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold" color="cyan.400">
                    {achievements.length}
                  </Text>
                </Box>
                <Icon as={VscStarFull} w={8} h={8} color="cyan.400" />
              </Flex>
            </CardBody>
          </Card>

          <Card bg={cardBg} borderColor={borderColor} borderWidth="1px">
            <CardBody>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text color={mutedTextColor} fontSize="sm">
                    Categories
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold" color="purple.400">
                    {categories.length}
                  </Text>
                </Box>
                <Icon as={FaStar} w={8} h={8} color="purple.400" />
              </Flex>
            </CardBody>
          </Card>

          <Card bg={cardBg} borderColor={borderColor} borderWidth="1px">
            <CardBody>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text color={mutedTextColor} fontSize="sm">
                    Years Active
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold" color="green.400">
                    5
                  </Text>
                </Box>
                <Icon as={VscCalendar} w={8} h={8} color="green.400" />
              </Flex>
            </CardBody>
          </Card>

          <Card bg={cardBg} borderColor={borderColor} borderWidth="1px">
            <CardBody>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text color={mutedTextColor} fontSize="sm">
                    Latest
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold" color="orange.400">
                    2025
                  </Text>
                </Box>
                <Icon as={FaTrophy} w={8} h={8} color="orange.400" />
              </Flex>
            </CardBody>
          </Card>
        </Grid>

        {/* Achievements Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              bg={cardBg}
              borderColor={borderColor}
              borderWidth="1px"
              cursor="pointer"
              transition="all 0.3s"
              _hover={{
                borderColor: "gray.600",
                transform: "translateY(-2px)",
                boxShadow: "0 10px 25px rgba(0, 212, 170, 0.1)",
              }}
              onClick={() => handleAchievementClick(achievement)}
            >
              <CardBody p={6}>
                {/* Header */}
                <Flex justify="space-between" align="start" mb={4}>
                  <Box
                    w={12}
                    h={12}
                    borderRadius="lg"
                    bg={`linear-gradient(135deg, var(--chakra-colors-${achievement.color}-500), var(--chakra-colors-${achievement.color}-600))`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="transform 0.3s"
                    _groupHover={{ transform: "scale(1.1)" }}
                  >
                    <Icon as={achievement.icon} w={6} h={6} color="white" />
                  </Box>
                  <Box textAlign="right">
                    <Text fontSize="2xl">{achievement.badge}</Text>
                    <Text color={mutedTextColor} fontSize="sm" mt={1}>
                      {achievement.year}
                    </Text>
                  </Box>
                </Flex>

                {/* Content */}
                <VStack spacing={3} align="stretch">
                  <Box>
                    <Heading
                      size="md"
                      color={textColor}
                      transition="color 0.3s"
                      _groupHover={{ color: "cyan.400" }}
                    >
                      {achievement.title}
                    </Heading>
                    <Text color={mutedTextColor} fontSize="sm">
                      {achievement.issuer}
                    </Text>
                  </Box>

                  <Box>
                    <Badge colorScheme="gray" fontSize="xs">
                      {achievement.category}
                    </Badge>
                  </Box>

                  <Text color={textColor} fontSize="sm" noOfLines={3}>
                    {achievement.description}
                  </Text>

                  {/* Skills */}
                  <Wrap spacing={1}>
                    {achievement.skills.map((skill, index) => (
                      <WrapItem key={index}>
                        <Badge
                          colorScheme="cyan"
                          variant="outline"
                          fontSize="xs"
                          px={2}
                          py={1}
                        >
                          {skill}
                        </Badge>
                      </WrapItem>
                    ))}
                  </Wrap>
                </VStack>

                {/* Footer */}
                <Flex justify="space-between" align="center" mt={4}>
                  <HStack spacing={2} color={mutedTextColor}>
                    <Icon as={VscCalendar} w={4} h={4} />
                    <Text fontSize="sm">{achievement.year}</Text>
                  </HStack>
                  <Icon
                    as={VscLinkExternal}
                    w={4}
                    h={4}
                    color={mutedTextColor}
                    transition="color 0.3s"
                    _groupHover={{ color: "cyan.400" }}
                  />
                </Flex>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Container>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent bg={cardBg} borderColor={borderColor} borderWidth="1px">
          <ModalHeader>
            <Flex align="center" gap={4}>
              <Box
                w={16}
                h={16}
                borderRadius="lg"
                bg={`linear-gradient(135deg, var(--chakra-colors-${selectedAchievement?.color}-500), var(--chakra-colors-${selectedAchievement?.color}-600))`}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {selectedAchievement && (
                  <Icon
                    as={selectedAchievement.icon}
                    w={8}
                    h={8}
                    color="white"
                  />
                )}
              </Box>
              <Box>
                <Heading size="lg" color={textColor}>
                  {selectedAchievement?.title}
                </Heading>
                <Text color={mutedTextColor}>
                  {selectedAchievement?.issuer}
                </Text>
              </Box>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4} align="stretch">
              <HStack spacing={4}>
                <Badge colorScheme="gray">
                  {selectedAchievement?.category}
                </Badge>
                <Text color={mutedTextColor}>{selectedAchievement?.year}</Text>
              </HStack>

              <Text color={textColor} lineHeight="relaxed">
                {selectedAchievement?.description}
              </Text>

              <Box>
                <Heading size="md" color={textColor} mb={2}>
                  Skills & Technologies
                </Heading>
                <Wrap spacing={2}>
                  {selectedAchievement?.skills.map((skill, index) => (
                    <WrapItem key={index}>
                      <Badge
                        colorScheme="cyan"
                        variant="outline"
                        fontSize="sm"
                        px={3}
                        py={1}
                      >
                        {skill}
                      </Badge>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AchievementsPage;