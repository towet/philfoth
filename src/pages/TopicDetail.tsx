
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BookOpen, Book, Heart, Lightbulb, Users, MessageSquare, GraduationCap, ArrowLeft, Download, Share2, Bookmark, Clock, ExternalLink, Scroll } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScriptureQuote from "@/components/ScriptureQuote";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

// Topic data with detailed content
const topicsData = {
  "understanding-scripture": {
    title: "Understanding Scripture",
    description: "Dive deeper into biblical texts and understand their context and meaning.",
    icon: <BookOpen className="h-8 w-8" />,
    color: "bg-blue-500",
    bannerImage: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    introText: "Scripture is more than ancient text—it's a living narrative that speaks to our modern lives. Understanding the cultural context, literary styles, and historical background enriches our interpretation and application of biblical wisdom.",
    keyPassages: [
      { reference: "Psalm 119:105", text: "Your word is a lamp for my feet, a light on my path." },
      { reference: "2 Timothy 3:16-17", text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work." },
      { reference: "Hebrews 4:12", text: "For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart." }
    ],
    resources: [
      { title: "Reading Scripture in Context", type: "Video Series", length: "45 minutes" },
      { title: "Biblical Literary Styles Guide", type: "PDF Document", length: "23 pages" },
      { title: "Historical Background of Ancient Texts", type: "Interactive Course", length: "4 modules" }
    ],
    studyQuestions: [
      "How does understanding the historical context of a passage change your interpretation?",
      "What literary devices can you identify in your favorite biblical passages?",
      "How has your understanding of a particular scripture evolved over time?",
      "In what ways does cultural context influence how we interpret parables and teachings?"
    ],
    practicalExercises: [
      { 
        title: "Contextual Reading",
        description: "Select a short passage and research its historical and cultural context before reading. Note how this context affects your understanding.",
        steps: ["Choose a passage from one of Paul's letters", "Research the city and culture it was written to", "Identify specific cultural references", "Reread with this context in mind"]
      },
      { 
        title: "Literary Style Analysis",
        description: "Identify different literary styles in scripture and practice reading each with appropriate interpretive lenses.",
        steps: ["Compare a psalm, a parable, and a historical narrative", "Note the distinct features of each", "Practice applying appropriate interpretive approaches"]
      }
    ],
    discussionPrompts: [
      "Share a time when understanding the context of a passage significantly changed your interpretation.",
      "How do you balance scholarly interpretations with personal revelation when studying scripture?",
      "What strategies have helped you understand difficult or confusing passages?"
    ]
  },
  "life-application": {
    title: "Life Application",
    description: "Learn how to apply biblical teachings to your everyday life challenges.",
    icon: <GraduationCap className="h-8 w-8" />,
    color: "bg-green-500",
    bannerImage: "https://images.unsplash.com/photo-1501516069841-a0c736a4e804?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    introText: "Scripture wasn't meant to stay on the page—it's designed to transform our daily lives. Learning to bridge ancient wisdom with modern challenges helps us find guidance, comfort, and direction in every situation we face.",
    keyPassages: [
      { reference: "James 1:22", text: "Do not merely listen to the word, and so deceive yourselves. Do what it says." },
      { reference: "Joshua 1:8", text: "Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful." },
      { reference: "Matthew 7:24-25", text: "Therefore everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock. The rain came down, the streams rose, and the winds blew and beat against that house; yet it did not fall, because it had its foundation on the rock." }
    ],
    resources: [
      { title: "Biblical Wisdom for Modern Decisions", type: "Guided Workbook", length: "30 exercises" },
      { title: "Scripture for Daily Challenges", type: "Mobile App", length: "365 daily reflections" },
      { title: "Applying Parables Today", type: "Audio Series", length: "12 episodes" }
    ],
    studyQuestions: [
      "How does a particular teaching from Jesus apply to your current work environment?",
      "What biblical principles guide your approach to relationships?",
      "How can wisdom literature (Proverbs, Ecclesiastes) inform your decision-making process?",
      "In what ways do you struggle to apply biblical teaching to modern ethical dilemmas?"
    ],
    practicalExercises: [
      { 
        title: "Scripture Journaling",
        description: "Keep a daily journal connecting scripture readings with specific situations in your life.",
        steps: ["Read a small passage each morning", "Identify one principle or truth", "Write how it applies to a current situation", "Reflect on the results at the end of each week"]
      },
      { 
        title: "Decision Making Framework",
        description: "Create a biblical decision-making framework for important life choices.",
        steps: ["Identify relevant scriptural principles", "List questions to evaluate options", "Consider counsel and prayer", "Document your process and outcomes"]
      }
    ],
    discussionPrompts: [
      "Share a recent example of how you applied biblical wisdom to solve a problem.",
      "What scripture has been most practical in your daily life and why?",
      "How do you discern which biblical principles apply to modern situations not directly addressed in scripture?"
    ]
  },
  "prayer-meditation": {
    title: "Prayer & Meditation",
    description: "Discover techniques for meaningful prayer and spiritual meditation practices.",
    icon: <Book className="h-8 w-8" />,
    color: "bg-purple-500",
    bannerImage: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    introText: "Prayer and meditation are the heartbeat of spiritual growth—creating space for divine connection and inner transformation. Learning various approaches helps us develop a rich, sustainable practice that nourishes our relationship with God.",
    keyPassages: [
      { reference: "Philippians 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
      { reference: "Psalm 46:10", text: "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth." },
      { reference: "1 Thessalonians 5:16-18", text: "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus." }
    ],
    resources: [
      { title: "Contemplative Prayer Practices", type: "Online Course", length: "8 sessions" },
      { title: "Scripture Meditation Guide", type: "Digital Journal", length: "52 weekly guides" },
      { title: "Ancient Prayer Traditions", type: "Podcast Series", length: "10 episodes" }
    ],
    studyQuestions: [
      "How has your understanding of prayer evolved over your spiritual journey?",
      "What barriers do you face in developing a consistent meditation practice?",
      "Which biblical models of prayer resonate most with your personality and needs?",
      "How do you balance speaking and listening in your prayer life?"
    ],
    practicalExercises: [
      { 
        title: "Lectio Divina",
        description: "Practice this ancient method of scripture meditation through reading, reflection, response, and rest.",
        steps: ["Select a short scripture passage", "Read slowly and reflectively", "Meditate on a word or phrase that stands out", "Respond in prayer", "Rest in contemplative silence"]
      },
      { 
        title: "Prayer Walking",
        description: "Combine physical movement with prayer to engage both body and spirit.",
        steps: ["Choose a meaningful location", "Walk slowly and attentively", "Pray for what you observe", "Note insights that arise during the experience"]
      }
    ],
    discussionPrompts: [
      "Describe a meaningful prayer experience and what made it significant.",
      "How do you maintain focus during meditation or prayer?",
      "What creative prayer practices have enhanced your spiritual life?"
    ]
  },
  "community-discussion": {
    title: "Community Discussion",
    description: "Join conversations about scripture and share insights with others.",
    icon: <MessageSquare className="h-8 w-8" />,
    color: "bg-amber-500",
    bannerImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    introText: "Scripture comes alive in community—where diverse perspectives, questions, and experiences enrich our understanding. Learning to engage in meaningful spiritual conversations builds connections and deepens our collective wisdom.",
    keyPassages: [
      { reference: "Proverbs 27:17", text: "As iron sharpens iron, so one person sharpens another." },
      { reference: "Hebrews 10:24-25", text: "And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching." },
      { reference: "Acts 2:42", text: "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer." }
    ],
    resources: [
      { title: "Facilitating Meaningful Discussions", type: "Training Video", length: "60 minutes" },
      { title: "Community Reading Guide", type: "Group Study Kit", length: "12 sessions" },
      { title: "Digital Scripture Forums", type: "Online Platform", length: "Ongoing engagement" }
    ],
    studyQuestions: [
      "How has community discussion changed your understanding of particular scriptures?",
      "What makes a scripture conversation meaningful versus superficial?",
      "How do you navigate disagreements about interpretation within community?",
      "What role does vulnerability play in authentic spiritual discussions?"
    ],
    practicalExercises: [
      { 
        title: "Perspective Sharing",
        description: "Practice listening to multiple viewpoints on a single passage without immediate judgment.",
        steps: ["Select a rich, multi-layered passage", "Invite diverse perspectives", "Practice active listening", "Identify how each perspective contributes to fuller understanding"]
      },
      { 
        title: "Question Cultivation",
        description: "Develop the art of asking thoughtful questions that deepen discussion.",
        steps: ["Prepare open-ended questions", "Focus on application and meaning", "Follow up on responses", "Reflect on which questions sparked the richest conversation"]
      }
    ],
    discussionPrompts: [
      "Describe a time when someone's insight completely changed your understanding of a scripture.",
      "What makes you feel safe or unsafe when sharing your thoughts on scripture in a group?",
      "How has technology affected the way we engage in community discussion about faith?"
    ]
  },
  "biblical-foundations": {
    title: "Biblical Foundations",
    description: "Explore the core principles and foundational teachings of Scripture.",
    icon: <Book className="h-8 w-8" />,
    color: "bg-indigo-500",
    bannerImage: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    introText: "The Biblical foundations are the essential truths and principles that form the basis of Christian faith and practice. Understanding these foundations provides a solid framework for spiritual growth, biblical interpretation, and faithful living in today's complex world.",
    keyPassages: [
      { reference: "Matthew 7:24-25", text: "Therefore everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock. The rain came down, the streams rose, and the winds blew and beat against that house; yet it did not fall, because it had its foundation on the rock." },
      { reference: "2 Timothy 3:16-17", text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work." },
      { reference: "Psalm 119:11", text: "I have hidden your word in my heart that I might not sin against you." }
    ],
    resources: [
      { title: "Core Christian Doctrines", type: "Interactive Course", length: "6 modules" },
      { title: "Foundations of Faith", type: "Video Series", length: "12 episodes" },
      { title: "Biblical Worldview Primer", type: "Digital Book", length: "185 pages" }
    ],
    studyQuestions: [
      "How do the key doctrines of Christianity interconnect to form a coherent worldview?",
      "In what ways has your understanding of biblical foundations evolved over time?",
      "How do you discern between essential and non-essential doctrines?",
      "What foundational biblical principles most directly impact your daily decision-making?"
    ],
    practicalExercises: [
      { 
        title: "Doctrinal Mapping",
        description: "Create a visual map connecting core biblical doctrines and their scriptural support.",
        steps: ["Identify 5-7 foundational doctrines", "Find key supporting passages for each", "Draw connections between related doctrines", "Reflect on how each shapes your faith practice"]
      },
      { 
        title: "Worldview Application",
        description: "Examine how biblical foundations shape your perspective on contemporary issues.",
        steps: ["Select a current cultural or ethical issue", "Identify relevant biblical principles", "Compare biblical and secular perspectives", "Develop a thoughtful Christian response"]
      }
    ],
    discussionPrompts: [
      "How has a strong understanding of biblical foundations helped you navigate challenging circumstances?",
      "Which foundational teaching of Scripture do you find most difficult to fully embrace or understand?",
      "How do you communicate foundational biblical truths to those unfamiliar with Christian concepts?"
    ]
  },
  "scripture-interpretation": {
    title: "Scripture Interpretation",
    description: "Learn methods for accurately understanding and applying biblical texts.",
    icon: <BookOpen className="h-8 w-8" />,
    color: "bg-cyan-600",
    bannerImage: "https://images.unsplash.com/photo-1581859814481-bfd944e3122f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    introText: "Scripture interpretation (hermeneutics) is both an art and a science—requiring careful attention to context, language, history, and spiritual discernment. Learning sound interpretive principles helps us faithfully understand God's intended meaning and accurately apply Scripture to our lives today.",
    keyPassages: [
      { reference: "Nehemiah 8:8", text: "They read from the Book of the Law of God, making it clear and giving the meaning so that the people understood what was being read." },
      { reference: "2 Peter 1:20-21", text: "Above all, you must understand that no prophecy of Scripture came about by the prophet's own interpretation of things. For prophecy never had its origin in the human will, but prophets, though human, spoke from God as they were carried along by the Holy Spirit." },
      { reference: "Acts 8:30-31", text: "Then Philip ran up to the chariot and heard the man reading Isaiah the prophet. 'Do you understand what you are reading?' Philip asked. 'How can I,' he said, 'unless someone explains it to me?' So he invited Philip to come up and sit with him." }
    ],
    resources: [
      { title: "Hermeneutics: Principles and Practices", type: "Online Course", length: "8 sessions" },
      { title: "Cultural Background Study Bible", type: "Reference Resource", length: "Comprehensive" },
      { title: "Interpretation in Context", type: "Workshop Series", length: "5 workshops" }
    ],
    studyQuestions: [
      "How do literary genres in Scripture affect your approach to interpretation?",
      "What role should historical and cultural context play in understanding biblical texts?",
      "How do you balance academic study with spiritual illumination when interpreting Scripture?",
      "What common interpretive mistakes have you noticed in your own study or in others' teaching?"
    ],
    practicalExercises: [
      { 
        title: "Genre Analysis",
        description: "Practice interpreting passages from different biblical genres with appropriate methods.",
        steps: ["Select passages from narrative, poetry, epistle, and apocalyptic literature", "Research the specific interpretive principles for each genre", "Apply these principles to your selected texts", "Note how your understanding changes with proper genre awareness"]
      },
      { 
        title: "Context Expansion",
        description: "Examine a verse in progressively wider contexts to enhance understanding.",
        steps: ["Choose a well-known verse", "Study the immediate verse context", "Expand to chapter context", "Consider book context", "Place it within the full biblical narrative"]
      }
    ],
    discussionPrompts: [
      "Share an example of how better interpretive methods changed your understanding of a passage.",
      "How do you respectfully engage with those who interpret key passages differently?",
      "What resources have most helped you grow in your ability to interpret Scripture accurately?"
    ]
  },
  "spiritual-formation": {
    title: "Spiritual Formation",
    description: "Develop habits and practices that foster spiritual growth and maturity.",
    icon: <Heart className="h-8 w-8" />,
    color: "bg-rose-500",
    bannerImage: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    introText: "Spiritual formation is the ongoing process of being shaped into the image of Christ for the sake of others. Through intentional practices, community engagement, and the work of the Holy Spirit, we gradually develop the character, wisdom, and love that reflect God's transforming presence in our lives.",
    keyPassages: [
      { reference: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is—his good, pleasing and perfect will." },
      { reference: "2 Corinthians 3:18", text: "And we all, who with unveiled faces contemplate the Lord's glory, are being transformed into his image with ever-increasing glory, which comes from the Lord, who is the Spirit." },
      { reference: "Galatians 5:22-23", text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law." }
    ],
    resources: [
      { title: "Sacred Rhythms: Spiritual Practices", type: "Guided Journal", length: "40 days" },
      { title: "Formation in Community", type: "Small Group Curriculum", length: "12 weeks" },
      { title: "The Transforming Path", type: "Spiritual Direction Guide", length: "9 sessions" }
    ],
    studyQuestions: [
      "Which spiritual disciplines have been most formative in your journey?",
      "How do you recognize and measure spiritual growth in your life?",
      "What role does community play in healthy spiritual formation?",
      "How do you maintain spiritual practices during difficult seasons?"
    ],
    practicalExercises: [
      { 
        title: "Rule of Life Development",
        description: "Create a personalized pattern of spiritual practices aligned with your current season of life.",
        steps: ["Assess your current spiritual rhythms", "Identify areas for growth", "Design sustainable practices for daily, weekly, and monthly intervals", "Implement with accountability", "Review and adjust quarterly"]
      },
      { 
        title: "Character Formation Inventory",
        description: "Examine the fruit of the Spirit in your life and create development intentions.",
        steps: ["Reflect on each fruit of the Spirit", "Invite trusted feedback from others", "Identify specific growth opportunities", "Create practical situations to exercise underdeveloped traits"]
      }
    ],
    discussionPrompts: [
      "Describe a spiritual practice that initially felt uncomfortable but became life-giving.",
      "How has your understanding of spiritual formation evolved over different life stages?",
      "What obstacles most frequently derail your spiritual growth, and how do you overcome them?"
    ]
  },
  "biblical-leadership": {
    title: "Biblical Leadership",
    description: "Discover principles of godly leadership from Scripture's examples.",
    icon: <Users className="h-8 w-8" />,
    color: "bg-amber-600",
    bannerImage: "https://images.unsplash.com/photo-1507662228758-08d030c4820b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    introText: "Biblical leadership differs fundamentally from worldly models—focusing on service, character, and kingdom impact rather than power, position, or prestige. By studying the leadership examples and principles throughout Scripture, we learn to lead in ways that honor God, empower others, and advance eternal purposes.",
    keyPassages: [
      { reference: "Mark 10:42-45", text: "Jesus called them together and said, 'You know that those who are regarded as rulers of the Gentiles lord it over them, and their high officials exercise authority over them. Not so with you. Instead, whoever wants to become great among you must be your servant, and whoever wants to be first must be slave of all. For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.'" },
      { reference: "1 Timothy 3:2-3", text: "Now the overseer is to be above reproach, faithful to his wife, temperate, self-controlled, respectable, hospitable, able to teach, not given to drunkenness, not violent but gentle, not quarrelsome, not a lover of money." },
      { reference: "Proverbs 16:12", text: "Kings detest wrongdoing, for a throne is established through righteousness." }
    ],
    resources: [
      { title: "Servant Leadership Framework", type: "Leadership Assessment", length: "Comprehensive toolkit" },
      { title: "Biblical Models of Leadership", type: "Case Study Collection", length: "15 profiles" },
      { title: "Leading Like Jesus", type: "Mentoring Program", length: "6 months" }
    ],
    studyQuestions: [
      "How do biblical leadership principles challenge contemporary leadership models?",
      "What character qualities do you find most essential for godly leadership?",
      "How do you balance decisive leadership with collaborative community input?",
      "What biblical leader (besides Jesus) most inspires your leadership approach and why?"
    ],
    practicalExercises: [
      { 
        title: "Leadership Shadow Assessment",
        description: "Examine the unintended impacts of your leadership style and decisions.",
        steps: ["Identify your core leadership practices", "Gather anonymous feedback from those you lead", "Compare your intentions with actual impacts", "Develop specific adjustments based on biblical principles"]
      },
      { 
        title: "Decision-Making Framework",
        description: "Create a biblically-informed process for making significant leadership decisions.",
        steps: ["Study biblical examples of decision-making", "Extract key principles", "Design a practical step-by-step process", "Apply to a current decision", "Evaluate and refine"]
      }
    ],
    discussionPrompts: [
      "Describe a time when applying biblical leadership principles led to a different outcome than conventional wisdom would have produced.",
      "How do you maintain spiritual vitality while bearing leadership responsibilities?",
      "What biblical safeguards help prevent leadership abuses or failures?"
    ]
  },
  "biblical-theology": {
    title: "Biblical Theology",
    description: "Study the progressive revelation of God's redemptive plan through Scripture.",
    icon: <Book className="h-8 w-8" />,
    color: "bg-emerald-600",
    bannerImage: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    introText: "Biblical theology explores how God's revelation unfolds across Scripture, tracing key themes, motifs, and concepts as they develop from Genesis to Revelation. Understanding this 'grand narrative' helps us see each biblical text within its redemptive-historical context and grasp the remarkable unity within Scripture's diversity.",
    keyPassages: [
      { reference: "Luke 24:27", text: "And beginning with Moses and all the Prophets, he explained to them what was said in all the Scriptures concerning himself." },
      { reference: "Hebrews 1:1-2", text: "In the past God spoke to our ancestors through the prophets at many times and in various ways, but in these last days he has spoken to us by his Son, whom he appointed heir of all things, and through whom also he made the universe." },
      { reference: "2 Peter 3:18", text: "But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To him be glory both now and forever! Amen." }
    ],
    resources: [
      { title: "Covenant Through Canon", type: "Biblical Theology Survey", length: "12 sessions" },
      { title: "Themes in Biblical Theology", type: "Digital Library", length: "25 thematic studies" },
      { title: "Seeing Jesus in All of Scripture", type: "Video Lectures", length: "10 hours" }
    ],
    studyQuestions: [
      "How do you trace a specific theological theme across different biblical books and genres?",
      "In what ways does biblical theology inform your understanding of difficult passages?",
      "How does seeing the 'big picture' of Scripture impact your personal application?",
      "What theological themes do you see most clearly developing across biblical history?"
    ],
    practicalExercises: [
      { 
        title: "Theme Tracing",
        description: "Select a biblical theological theme and trace its development through Scripture.",
        steps: ["Choose a theme (covenant, kingdom, temple, etc.)", "Identify its first appearance in Scripture", "Trace key developments through biblical history", "Note its fulfillment or culmination in Christ", "Consider its ongoing implications"]
      },
      { 
        title: "Biblical-Theological Reading",
        description: "Practice reading individual passages within their redemptive-historical context.",
        steps: ["Select a passage to study", "Identify its place in biblical history", "Connect it to previous biblical revelation", "Consider how it anticipates future revelation", "Relate it to Christ and the gospel"]
      }
    ],
    discussionPrompts: [
      "Share an example of how biblical theology has helped you better understand a difficult passage.",
      "How has seeing the unified story of Scripture strengthened your faith?",
      "What biblical-theological themes do you find most compelling or transformative?"
    ]
  },
  "christian-apologetics": {
    title: "Christian Apologetics",
    description: "Explore reasoned arguments for the Christian faith and worldview.",
    icon: <Lightbulb className="h-8 w-8" />,
    color: "bg-yellow-500",
    bannerImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    introText: "Christian apologetics equips believers to articulate and defend the reasonableness and credibility of the Christian faith in an increasingly skeptical world. By engaging thoughtfully with philosophy, science, history, and culture, we develop compelling answers to challenging questions while maintaining a humble, Christ-like approach to dialogue.",
    keyPassages: [
      { reference: "1 Peter 3:15-16", text: "But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect, keeping a clear conscience, so that those who speak maliciously against your good behavior in Christ may be ashamed of their slander." },
      { reference: "Acts 17:2-3", text: "As was his custom, Paul went into the synagogue, and on three Sabbath days he reasoned with them from the Scriptures, explaining and proving that the Messiah had to suffer and rise from the dead. 'This Jesus I am proclaiming to you is the Messiah,' he said." },
      { reference: "2 Corinthians 10:5", text: "We demolish arguments and every pretension that sets itself up against the knowledge of God, and we take captive every thought to make it obedient to Christ." }
    ],
    resources: [
      { title: "Answering Today's Challenges", type: "Interactive Course", length: "8 modules" },
      { title: "Faith & Reason: Philosophical Foundations", type: "Audio Series", length: "12 episodes" },
      { title: "Confident Conversations", type: "Dialogue Training", length: "6 workshops" }
    ],
    studyQuestions: [
      "What apologetic approaches do you find most effective in today's cultural context?",
      "How do you balance intellectual defense with personal testimony when sharing faith?",
      "Which challenges to Christian belief do you find most difficult to address?",
      "How has apologetics strengthened your own faith journey?"
    ],
    practicalExercises: [
      { 
        title: "Doubt Exploration",
        description: "Examine your own questions and develop thoughtful responses.",
        steps: ["Identify your most significant questions about faith", "Research the best resources addressing each question", "Develop concise, thoughtful responses", "Practice articulating these answers conversationally"]
      },
      { 
        title: "Cultural Engagement Analysis",
        description: "Analyze current cultural narratives and develop Christian responses.",
        steps: ["Identify influential cultural claims that challenge Christian beliefs", "Examine underlying assumptions", "Research Christian perspectives", "Develop winsome, thoughtful responses", "Practice charitable dialogue"]
      }
    ],
    discussionPrompts: [
      "Share an apologetic conversation that changed how you approach faith discussions.",
      "How do you maintain both conviction and humility when defending your faith?",
      "What role should apologetics play in the church's approach to evangelism and discipleship?"
    ]
  },
  "old-testament": {
    title: "Old Testament Studies",
    description: "Deep dive into the history, poetry, and prophecy of the Old Testament.",
    icon: <Scroll className="h-8 w-8" />,
    color: "bg-stone-600",
    bannerImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    introText: "The Old Testament reveals the character of God, the nature of humanity, and the unfolding plan of redemption through rich narratives, profound poetry, and prophetic declarations. Far from being outdated or irrelevant, these ancient texts form the essential foundation for understanding Christian faith and provide timeless wisdom for godly living.",
    keyPassages: [
      { reference: "Genesis 12:1-3", text: "The Lord had said to Abram, 'Go from your country, your people and your father's household to the land I will show you. I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing. I will bless those who bless you, and whoever curses you I will curse; and all peoples on earth will be blessed through you.'" },
      { reference: "Exodus 19:5-6", text: "Now if you obey me fully and keep my covenant, then out of all nations you will be my treasured possession. Although the whole earth is mine, you will be for me a kingdom of priests and a holy nation." },
      { reference: "Micah 6:8", text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God." }
    ],
    resources: [
      { title: "Old Testament Survey", type: "Interactive Timeline", length: "Comprehensive guide" },
      { title: "Ancient Near Eastern Cultural Context", type: "Reference Library", length: "Digital collection" },
      { title: "Literary Forms in the Old Testament", type: "Study Guide", length: "9 chapters" }
    ],
    studyQuestions: [
      "How does understanding ancient Near Eastern culture enhance your reading of Old Testament narratives?",
      "What continuities and discontinuities do you see between Old Testament law and New Testament ethics?",
      "How do the prophets' messages to ancient Israel speak to contemporary issues?",
      "Which Old Testament characters or stories have most shaped your understanding of God?"
    ],
    practicalExercises: [
      { 
        title: "Narrative Analysis",
        description: "Examine an Old Testament narrative using literary and theological lenses.",
        steps: ["Select a narrative passage", "Identify literary features (plot, characters, setting, conflict)", "Note the passage's place in redemptive history", "Extract theological principles", "Consider contemporary applications"]
      },
      { 
        title: "Psalm Immersion",
        description: "Deeply engage with an Old Testament psalm through multiple approaches.",
        steps: ["Choose a psalm to study", "Research its historical context and purpose", "Analyze its poetic structure and imagery", "Personalize it through meditation and prayer", "Create a modern expression inspired by its themes"]
      }
    ],
    discussionPrompts: [
      "Which Old Testament book or character has been most formative for your faith journey?",
      "How do you respond to difficult Old Testament passages that seem to portray God in troubling ways?",
      "What Old Testament themes or promises do you see fulfilled in Christ and the church?"
    ]
  },
  "new-testament": {
    title: "New Testament Studies",
    description: "Explore the gospels, epistles, and apocalyptic literature of the New Testament.",
    icon: <BookOpen className="h-8 w-8" />,
    color: "bg-blue-600",
    bannerImage: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    introText: "The New Testament unveils the culmination of God's redemptive plan through Jesus Christ and illustrates how his life, death, and resurrection transform individuals and communities. Through the Gospels, Acts, Epistles, and Revelation, we witness the establishment of the church and receive practical guidance for authentic Christian living.",
    keyPassages: [
      { reference: "John 1:14", text: "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth." },
      { reference: "Romans 8:1-2", text: "Therefore, there is now no condemnation for those who are in Christ Jesus, because through Christ Jesus the law of the Spirit who gives life has set you free from the law of sin and death." },
      { reference: "Revelation 21:3-4", text: "And I heard a loud voice from the throne saying, 'Look! God's dwelling place is now among the people, and he will dwell with them. They will be his people, and God himself will be with them and be their God. He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.'" }
    ],
    resources: [
      { title: "Jesus in the Gospels", type: "Comparative Study", length: "40 days" },
      { title: "First Century Church: Acts & Epistles", type: "Historical Overview", length: "8 modules" },
      { title: "Revelation: Hope in Apocalyptic Times", type: "Video Commentary", length: "22 episodes" }
    ],
    studyQuestions: [
      "How do the four Gospel accounts complement each other to give a fuller picture of Jesus?",
      "What principles from the early church in Acts might be most relevant for today's church?",
      "How do the different writing styles and concerns of Paul, Peter, John and other New Testament authors contribute to a robust Christian theology?",
      "What aspects of apocalyptic literature should guide our reading of Revelation?"
    ],
    practicalExercises: [
      { 
        title: "Gospel Harmony",
        description: "Compare Gospel accounts of the same event to gain deeper insights.",
        steps: ["Select an event narrated in multiple Gospels", "Create a side-by-side comparison", "Note unique details in each account", "Consider the theological emphasis of each writer", "Synthesize insights from all perspectives"]
      },
      { 
        title: "Epistle Context Reconstruction",
        description: "Reconstruct the historical situation behind a New Testament letter.",
        steps: ["Choose an epistle to study", "Identify clues about the recipients' situation", "Research the historical and cultural setting", "Determine the author's purpose and concerns", "Consider how context illuminates the letter's message"]
      }
    ],
    discussionPrompts: [
      "Which New Testament book has been most transformative in your spiritual journey?",
      "How does understanding the first-century world help you better apply New Testament teachings today?",
      "What practices help you engage with familiar Gospel stories with fresh perspective?"
    ]
  }
};

const TopicDetail = () => {
  const { topicSlug } = useParams();
  const [topic, setTopic] = useState<any>(null);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set topic data based on the slug
    if (topicSlug && topicsData[topicSlug as keyof typeof topicsData]) {
      setTopic(topicsData[topicSlug as keyof typeof topicsData]);
    }
  }, [topicSlug]);
  
  if (!topic) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-playfair font-bold mb-4">Topic Not Found</h1>
            <p className="mb-8 text-gray-600 dark:text-gray-400">The topic you're looking for doesn't exist or has been moved.</p>
            <Button asChild>
              <Link to="/topics">Browse All Topics</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Banner */}
      <div 
        className="relative pt-20 pb-12 md:pb-20" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${topic.bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 relative z-10 text-white">
          <Link 
            to="/topics" 
            className="inline-flex items-center text-white/90 hover:text-white mb-6 animate-fade-in bg-black/20 px-3 py-1 rounded-md"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Topics
          </Link>
          
          <div className="max-w-4xl">
            <div className={`h-16 w-16 rounded-full ${topic.color} flex items-center justify-center mb-6 animate-fade-in shadow-lg`}>
              {topic.icon}
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              {topic.title}
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-3xl mb-8 animate-fade-in animate-delay-100">
              {topic.description}
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in animate-delay-200">
              <Button size="sm" variant="outline" className="border-white/60 text-white hover:bg-white/20 hover:border-white bg-white/10 font-medium shadow-sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button size="sm" variant="outline" className="border-white/60 text-white hover:bg-white/20 hover:border-white bg-white/10 font-medium shadow-sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save for Later
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Introduction */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in">
              {topic.introText}
            </p>
          </div>
        </div>
      </section>
      
      {/* Key Passages */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold mb-8 animate-fade-in">Key Passages</h2>
            <div className="space-y-6">
              {topic.keyPassages.map((passage: any, index: number) => (
                <div 
                  key={passage.reference}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="italic text-gray-700 dark:text-gray-300 mb-3">"{passage.text}"</p>
                  <p className="text-right font-medium text-scripture">— {passage.reference}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Study Tabs */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold mb-8 animate-fade-in">Study Guide</h2>
            
            <Tabs defaultValue="questions" className="w-full animate-fade-in animate-delay-100">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="questions">Study Questions</TabsTrigger>
                <TabsTrigger value="exercises">Practical Exercises</TabsTrigger>
                <TabsTrigger value="discussion">Discussion Prompts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="questions" className="pt-4">
                <ul className="space-y-4">
                  {topic.studyQuestions.map((question: string, index: number) => (
                    <li key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md border-l-4 border-scripture">
                      {question}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="exercises" className="pt-4">
                <div className="space-y-8">
                  {topic.practicalExercises.map((exercise: any, index: number) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                      <h3 className="text-xl font-medium text-scripture mb-2">{exercise.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{exercise.description}</p>
                      <div className="pl-4 border-l-2 border-gray-300 dark:border-gray-700">
                        <h4 className="font-medium mb-2">Steps:</h4>
                        <ol className="list-decimal pl-5 space-y-1">
                          {exercise.steps.map((step: string, stepIndex: number) => (
                            <li key={stepIndex}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="discussion" className="pt-4">
                <ul className="space-y-4">
                  {topic.discussionPrompts.map((prompt: string, index: number) => (
                    <li key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
                      <div className="flex">
                        <div className="mr-4">
                          <div className="h-8 w-8 rounded-full bg-scripture/20 flex items-center justify-center text-scripture">
                            <MessageSquare className="h-4 w-4" />
                          </div>
                        </div>
                        <div>
                          {prompt}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Resources section removed as requested */}
      
      {/* FAQs */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold mb-8 animate-fade-in">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="animate-fade-in animate-delay-100">
              <AccordionItem value="item-1">
                <AccordionTrigger>What level of biblical knowledge do I need for this topic?</AccordionTrigger>
                <AccordionContent>
                  This topic is designed to be accessible to all levels of biblical knowledge. Whether you're new to scripture study or have years of experience, the materials and discussions can be engaged with at various depths. The resources provided include both foundational concepts and more advanced explorations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long should I expect to spend on this study?</AccordionTrigger>
                <AccordionContent>
                  The beauty of this topic is its flexibility. You can engage with it in brief 15-minute sessions or deeper hour-long studies. Many people find spending 30 minutes, 3-4 times weekly creates a meaningful rhythm. The practical exercises and discussion prompts can be revisited multiple times for ongoing growth.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I use these materials in a group setting?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! These resources are designed to be effective both for individual study and group discussions. The discussion prompts are particularly valuable for community settings, while the practical exercises can be adapted for group participation or assigned as individual practices between meetings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Are these exercises based on a particular theological tradition?</AccordionTrigger>
                <AccordionContent>
                  While rooted in established biblical study methods, these materials aim to be accessible across various Christian traditions. The focus is on engaging directly with scripture and finding meaningful applications rather than promoting specific denominational interpretations. Different theological perspectives are acknowledged where relevant.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Next Steps */}
      <section className="py-12 bg-scripture text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl font-bold mb-6 animate-fade-in">
              Continue Your Journey
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-100">
              Ready to deepen your understanding even further? Explore related topics, join a discussion group, or schedule a guided debriefing session with one of our facilitators.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in animate-delay-200">
              <Button className="bg-white text-scripture hover:bg-cream">
                Join a Discussion Group
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 bg-white/10 font-medium shadow-sm">
                Related Topics
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 bg-white/10 font-medium shadow-sm">
                Schedule a Debriefing
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TopicDetail;
