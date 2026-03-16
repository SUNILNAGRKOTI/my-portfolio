import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/motion';
import { personalInfo } from '../../data/personalInfo';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const contactItems = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'sunilsinghnagarkoti108@gmail.com',
    href: 'mailto:sunilsinghnagarkoti108@gmail.com',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+91 8650743567',
    href: 'tel:+918650743567',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Bageshwar, Uttarakhand, India',
    href: null,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/SunilNagarkoti',
    href: 'https://github.com/SunilNagarkoti',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Sunil Nagarkoti',
    href: 'https://www.linkedin.com/in/sunil-nagarkoti-911729241',
    gradient: 'from-blue-500 to-indigo-600',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="floating-blob w-80 h-80 bg-primary-500 -top-20 left-1/4" />
      <div className="floating-blob w-64 h-64 bg-accent-pink bottom-10 right-10" style={{ animationDelay: '2s' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Feel free to reach out for collaborations, opportunities, or just a friendly chat"
          gradient="from-primary-400 via-pink-400 to-cyan-400"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {contactItems.map((item) => {
            const Icon = item.icon;
            const Wrapper = item.href ? 'a' : 'div';
            const wrapperProps = item.href
              ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
              : {};

            return (
              <GlassCard
                key={item.label}
                variants={fadeInUp}
                className="text-center group cursor-pointer"
              >
                <Wrapper {...wrapperProps} className="block">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-white font-heading font-semibold mb-1">{item.label}</h3>
                  <p className="text-gray-400 text-sm break-all">{item.value}</p>
                </Wrapper>
              </GlassCard>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Interested in working together? Let's connect!
          </p>
          <a
            href="mailto:sunilsinghnagarkoti108@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 via-accent-pink to-accent-blue text-white font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all bg-300% animate-gradient-x"
          >
            <FaEnvelope />
            Send an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
