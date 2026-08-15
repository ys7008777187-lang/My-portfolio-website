import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useAnimations';
import Badge from '../ui/Badge';
import './FeaturesSection.css';

/* ---- Animated Card Demos ---- */

function MessageBoardDemo() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const messages = [
    { avatar: 'AS', name: 'Alice Stone', color: '#7C3AED', text: 'Design system component update', tag: '#design', time: '5 hrs ago', comments: 11 },
    { avatar: 'JM', name: 'Jake Miller', color: '#3B82F6', text: 'Sprint review notes — Week 24', tag: '#engineering', time: '8 hrs ago', comments: 7 },
    { avatar: 'PR', name: 'Priya Rao', color: '#EC4899', text: 'Q3 campaign strategy and timeline', tag: '#marketing', time: '1 day ago', comments: 15 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages(prev => {
        if (prev >= messages.length) {
          setTimeout(() => setVisibleMessages(0), 800);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="demo-messageboard">
      <div className="demo-messageboard__header">
        <span className="demo-messageboard__icon">💬</span>
        <span className="demo-messageboard__title">Message Board</span>
        <span className="demo-messageboard__count">{messages.length} threads</span>
      </div>
      <div className="demo-messageboard__list">
        {messages.map((msg, i) => (
          <div
            key={msg.name}
            className={`demo-messageboard__item ${i < visibleMessages ? 'demo-messageboard__item--visible' : ''}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="demo-messageboard__avatar" style={{ background: msg.color }}>{msg.avatar}</div>
            <div className="demo-messageboard__content">
              <div className="demo-messageboard__msg-title">{msg.text}</div>
              <div className="demo-messageboard__meta">
                <span className="demo-messageboard__tag">{msg.tag}</span>
                <span>{msg.time} · {msg.comments} comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TodoDemo() {
  const [checkedItems, setCheckedItems] = useState(new Set([0, 1]));
  const tasks = [
    { text: 'Finalize landing page copy', assignee: 'LS', due: 'Today', color: '#16A34A' },
    { text: 'Review design assets', assignee: 'CG', due: 'Tomorrow', color: '#3B82F6' },
    { text: 'Setup email workflows', assignee: 'DJ', due: 'Jun 25', color: '#F59E0B' },
    { text: 'Schedule social campaign', assignee: 'BT', due: 'Jun 28', color: '#EC4899' },
    { text: 'Prepare analytics dashboard', assignee: 'MP', due: 'Jul 1', color: '#7C3AED' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCheckedItems(prev => {
        const next = new Set(prev);
        const unchecked = tasks.map((_, i) => i).filter(i => !next.has(i));
        const checked = [...next];
        if (unchecked.length > 0) {
          next.add(unchecked[0]);
        } else if (checked.length > 0) {
          next.delete(checked[0]);
        }
        return next;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, [tasks.length]);

  return (
    <div className="demo-todo">
      <div className="demo-todo__header">
        <span className="demo-todo__title">To-dos</span>
        <span className="demo-todo__progress">{checkedItems.size}/{tasks.length}</span>
      </div>
      <div className="demo-todo__bar">
        <div className="demo-todo__bar-fill" style={{ width: `${(checkedItems.size / tasks.length) * 100}%` }} />
      </div>
      <div className="demo-todo__list">
        {tasks.map((task, i) => (
          <div key={task.text} className={`demo-todo__item ${checkedItems.has(i) ? 'demo-todo__item--done' : ''}`}>
            <div className={`demo-todo__check ${checkedItems.has(i) ? 'demo-todo__check--checked' : ''}`}>
              {checkedItems.has(i) && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              )}
            </div>
            <span className={`demo-todo__text ${checkedItems.has(i) ? 'demo-todo__text--struck' : ''}`}>{task.text}</span>
            <span className="demo-todo__assignee" style={{ background: task.color }}>{task.assignee}</span>
            <span className="demo-todo__due">{task.due}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatDemo() {
  const [visibleChats, setVisibleChats] = useState(0);
  const chats = [
    { avatar: 'SK', name: 'Sarah Kim', color: '#7C3AED', text: 'Just pushed the updated tokens 🎨', time: '2m ago' },
    { avatar: 'MJ', name: 'Marcus J.', color: '#3B82F6', text: 'Looks great! Tests are passing ✅', time: '1m ago' },
    { avatar: 'LR', name: 'Lisa R.', color: '#EC4899', text: 'Ship it! 🚀', time: 'Just now', reactions: ['🔥 3', '🚀 2'] },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleChats(prev => prev >= chats.length ? 0 : prev + 1);
    }, 1400);
    return () => clearInterval(interval);
  }, [chats.length]);

  return (
    <div className="demo-chat">
      <div className="demo-chat__header">
        <span className="demo-chat__icon">🏕️</span>
        <span className="demo-chat__title">Campfire</span>
        <span className="demo-chat__status">● 3 online</span>
      </div>
      <div className="demo-chat__messages">
        {chats.map((chat, i) => (
          <div
            key={chat.name}
            className={`demo-chat__bubble ${i < visibleChats ? 'demo-chat__bubble--visible' : ''}`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className="demo-chat__avatar" style={{ background: chat.color }}>{chat.avatar}</div>
            <div className="demo-chat__body">
              <div className="demo-chat__name">{chat.name} <span className="demo-chat__time">{chat.time}</span></div>
              <div className="demo-chat__text">{chat.text}</div>
              {chat.reactions && (
                <div className="demo-chat__reactions">
                  {chat.reactions.map(r => <span key={r} className="demo-chat__reaction">{r}</span>)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScheduleDemo() {
  const [activeDay, setActiveDay] = useState(2);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const events = [
    [
      { time: '9:00', label: 'Stand-up', color: '#16A34A' },
      { time: '14:00', label: 'Design Review', color: '#3B82F6' },
    ],
    [
      { time: '10:00', label: 'Sprint Planning', color: '#7C3AED' },
      { time: '15:00', label: 'Client Call', color: '#F59E0B' },
    ],
    [
      { time: '9:00', label: 'Stand-up', color: '#16A34A' },
      { time: '11:00', label: 'Product Demo', color: '#EC4899' },
      { time: '16:00', label: 'Retro', color: '#F59E0B' },
    ],
    [
      { time: '10:00', label: 'Workshop', color: '#3B82F6' },
    ],
    [
      { time: '9:00', label: 'Stand-up', color: '#16A34A' },
      { time: '13:00', label: 'Launch Prep', color: '#EC4899' },
    ],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDay(prev => (prev + 1) % days.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [days.length]);

  return (
    <div className="demo-schedule">
      <div className="demo-schedule__header">
        <span className="demo-schedule__title">Schedule</span>
        <span className="demo-schedule__month">June 2026</span>
      </div>
      <div className="demo-schedule__days">
        {days.map((d, i) => (
          <button
            key={d}
            className={`demo-schedule__day ${i === activeDay ? 'demo-schedule__day--active' : ''}`}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="demo-schedule__events">
        {events[activeDay]?.map((ev) => (
          <div key={ev.label} className="demo-schedule__event" style={{ borderLeftColor: ev.color }}>
            <span className="demo-schedule__event-time">{ev.time}</span>
            <span className="demo-schedule__event-label">{ev.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Main Section ---- */

const features = [
  {
    id: 'messageboard',
    title: 'Message Board',
    subtitle: 'Organized, async discussions that replace messy email threads and scattered Slack messages.',
    span: 'wide',
    Demo: MessageBoardDemo,
  },
  {
    id: 'todos',
    title: 'To-dos',
    subtitle: 'Crystal-clear task management. Assign, set due dates, and track progress — no chasing required.',
    span: 'wide',
    Demo: TodoDemo,
  },
  {
    id: 'campfire',
    title: 'Campfire Chat',
    subtitle: 'Quick, casual real-time conversations with emoji reactions and threaded replies.',
    span: 'normal',
    Demo: ChatDemo,
  },
  {
    id: 'schedule',
    title: 'Schedule',
    subtitle: 'See every deadline, milestone, and event on a single calendar view.',
    span: 'normal',
    Demo: ScheduleDemo,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function FeaturesSection() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section
      className="features section"
      id="features"
      ref={ref}
      aria-labelledby="features-title"
    >
      <div className="container">
        <motion.div
          className="features__header"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge variant="success" className="features__badge">
            Core Features
          </Badge>
          <h2 className="features__title" id="features-title">
            Replace the chaos with clarity
          </h2>
          <p className="features__subtitle">
            Everything your team needs — plan, communicate, and deliver —
            without switching between a dozen apps.
          </p>
        </motion.div>

        <div className="features__bento">
          {features.map((feature, i) => (
            <motion.article
              key={feature.id}
              className={`feature-card feature-card--${feature.span}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
            >
              <div className="feature-card__text">
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__description">{feature.subtitle}</p>
              </div>
              <div className="feature-card__demo">
                <feature.Demo />
              </div>
              {/* Subtle gradient glow */}
              <div className="feature-card__glow" aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
