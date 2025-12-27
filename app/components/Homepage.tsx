"use client";

import styles from './Homepage.module.css';

export default function Homepage() {
  const features = [
    {
      icon: "⚽",
      title: "Predict & Play",
      description: "Submit your football match predictions on-chain and compete with friends and fellow football enthusiasts."
    },
    {
      icon: "🏆",
      title: "Earn Points",
      description: "Score points for every correct prediction. The more accurate you are, the higher you climb on the leaderboard."
    },
    {
      icon: "📊",
      title: "Compete on Leaderboards",
      description: "Track your progress and see how you rank against other predictors in real-time competitive rankings."
    },
    {
      icon: "🎁",
      title: "Win Rewards",
      description: "Creators can fund prediction giveaways with prizes. Top performers win rewards for their football knowledge."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Connect Wallet",
      description: "Link your crypto wallet to get started with ScoreMint"
    },
    {
      number: "02",
      title: "Make Predictions",
      description: "Choose upcoming matches and submit your predictions on-chain"
    },
    {
      number: "03",
      title: "Earn & Compete",
      description: "Rack up points for correct picks and climb the leaderboards"
    },
    {
      number: "04",
      title: "Win Prizes",
      description: "Compete in creator-funded challenges for exciting rewards"
    }
  ];

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>⚡</span>
            <span>Blockchain-Powered Predictions</span>
          </div>
          
          <h1 className={styles.heroTitle}>
            Predict. Compete. <span className={styles.gradient}>Win.</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            ScoreMint brings football prediction challenges to the blockchain. 
            Connect your wallet, make on-chain predictions, earn points for accuracy, 
            and compete for rewards.
          </p>
          
          <div className={styles.heroCTA}>
            <button className={styles.primaryButton}>
              Get Started
              <span className={styles.buttonIcon}>→</span>
            </button>
            <button className={styles.secondaryButton}>
              Learn More
            </button>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>10K+</div>
              <div className={styles.statLabel}>Predictions Made</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>5K+</div>
              <div className={styles.statLabel}>Active Users</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>$50K+</div>
              <div className={styles.statLabel}>Rewards Distributed</div>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.floatingCard}>
            <div className={styles.cardHeader}>
              <span className={styles.liveIndicator}>🔴 Live</span>
            </div>
            <div className={styles.matchPreview}>
              <div className={styles.team}>
                <div className={styles.teamIcon}>🦁</div>
                <div className={styles.teamName}>Team A</div>
              </div>
              <div className={styles.vs}>VS</div>
              <div className={styles.team}>
                <div className={styles.teamIcon}>🦅</div>
                <div className={styles.teamName}>Team B</div>
              </div>
            </div>
            <div className={styles.prediction}>
              <span>Your Prediction: Team A</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why ScoreMint?</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to turn your football knowledge into on-chain success
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionSubtitle}>
            Get started in just four simple steps
          </p>
        </div>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.stepConnector}></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Start Winning?</h2>
          <p className={styles.ctaSubtitle}>
            Join thousands of football fans making predictions and earning rewards on ScoreMint
          </p>
          <button className={styles.ctaButton}>
            Connect Wallet & Start
            <span className={styles.buttonIcon}>→</span>
          </button>
        </div>
      </section>
    </div>
  );
}