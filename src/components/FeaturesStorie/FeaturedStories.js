import React, { useState } from "react";
import "./FeaturedStories.css"; // Ensure this CSS file exists

const FeaturedStories = () => {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section className="featured-stories">
      <div className="story-container">
        {!showFullStory ? (
          <>
            <div className="story-content">
              <h2 className="story-title">
                A Child's Battle: Little Ryan’s Fight Against Cancer
              </h2>
              <p className="story-quote">
                "Mommy, will I be able to play outside again?" Those words from
                6-year-old Ryan broke his mother's heart as she held his tiny,
                fragile hand in the hospital room.
              </p>
              <p className="story-description">
                Ryan was a happy, energetic boy who loved playing soccer and
                chasing butterflies in the park. But when he started feeling
                unusually tired and developed unexplained bruises, his parents
                knew something was wrong. The diagnosis—Acute Lymphoblastic
                Leukemia—shattered their world.
              </p>
              <button
                className="read-more"
                onClick={() => setShowFullStory(true)}
              >
                READ FULL STORY
              </button>
            </div>
            <div className="story-image">
              <img src="/images/patient.jpg" alt="Little Ryan" />
            </div>
          </>
        ) : (
          <div className="full-story">
            <h2>Ryan's Battle with Cancer</h2>
            <p>
              Ryan's life changed overnight. The lively child who once ran
              freely in the park now found himself confined to a hospital bed,
              surrounded by machines and IV drips. The chemotherapy drained him,
              making him weak and nauseous. His once-bright eyes were often
              filled with tears as he endured painful treatments.
            </p>
            <p>
              "Why do I have to stay here, Mommy?" he would ask. His mother,
              struggling to hold back tears, would smile and say, "Because we
              are fighting a big, bad monster, and you are the bravest warrior."
            </p>
            <p>
              The doctors warned that the treatment would be tough, but Ryan’s
              spirit was tougher. On days he felt strong enough, he would draw
              pictures of superheroes, often sketching himself wearing a red
              cape. "I’m Super Ryan!" he would say with a weak yet determined
              smile.
            </p>
            <p>
              But there were days when he wanted to give up. Days when the pain
              was unbearable, when he lost all his hair, and when the other kids
              in the ward, his new friends, didn’t make it. "I don't want to be
              sick anymore," he sobbed one night. His father held him close and
              whispered, "You are stronger than this sickness, my little
              warrior."
            </p>
            <p>
              Slowly, Ryan began responding to treatment. His doctors marveled
              at his resilience. After months of fighting, he was finally
              declared cancer-free. The day he walked out of the hospital, he
              threw his arms in the air and shouted, "I won!"
            </p>
            <p>
              Ryan’s journey was not just a battle against cancer—it was a
              testament to hope, love, and the unwavering strength of a child’s
              spirit. Today, Ryan is back in the park, chasing butterflies and
              playing soccer, proving that even the smallest warriors can
              conquer the biggest battles.
              
                <h2><i>
                  "You beat cancer by how you live, why you live, and in the
                  manner in which you live." – Stuart Scott
                  </i> </h2>
              
            </p>
            <button
              className="close-story"
              onClick={() => setShowFullStory(false)}
            >
              Close Story
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedStories;
