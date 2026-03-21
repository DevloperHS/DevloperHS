## Introduction

The Alibaba team recently released the **Qwen 3 Series**, including two standout models: the **235B parameter MoE** model (with 22B active parameters) and a **lightweight 30B version** (3B active).

As per the official docs, the **Qwen3-235B-A22B** model takes on giants like **DeepSeek R1**, Grok-3, and Gemini 2.5 Pro—and it's doing it with fewer active parameters, faster inference, and open-source accessibility.

The Qwen3-30B-A3B outcompetes the previous QwQ-32B with 10 times the activated parameters, and a small model like Qwen3-4B can rival the performance of Qwen2.5-72B-Instruct.

![Qwen3 benchmark results](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5g5yp0qi9vk9gclm0wq0.jpg)

---

## TLDR;

- Alibaba released Qwen 3, featuring efficient MoE models (235B & 30B) claimed to outperform giants like DeepSeek R1 and GPT-4o with fewer active parameters.
- Qwen 3 **consistently** produced better, more functional, and user-friendly code for tasks.
- Both Qwen 3 and DeepSeek R1 correctly solved logic puzzles but Qwen had better output structure.
- While both performed well on simpler math, DeepSeek R1 more accurately solved complex multi-step calculations.
- Qwen 3 excelled at researching, summarizing, and structuring text.
- **Overall:** Qwen3 is a highly capable, efficient open-source choice, strong in coding/writing, while DeepSeek R1 holds an edge in complex math and reasoning speed.

---

## Qwen3: Key Details

| Feature | Details |
| --- | --- |
| **Moto** | Think Deeper, Act Faster |
| **Variants** | Qwen3-235B-A22B (MoE), Qwen3-30B (LMoE), 0.6B–32B Dense |
| **Benchmarks Beaten** | HumanEval, MATH, GSM8K, Big-Bench Hard, BoolQ, ARC-Challenge |
| **Mixture of Experts** | 10% active parameters = huge inference savings |
| **Modes** | Hybrid Thinking Mode (instant answers ↔ step-by-step reasoning) |
| **Language Support** | 119 languages |
| **Pretraining** | 36T tokens — twice the size of Qwen 2.5 |
| **Open Source** | Apache 2.0 license with local deployment option |

---

## CODING

### 1. Functional Sticky Note App

*(Skill Tested: Front-end UI development, DOM manipulation, interactivity)*

**Prompt:**
```
Create a frontend for a modern note taking app.
Make it so that you can add sticky notes.
Add snip / notes drag functionality too.
```

**Result:** Qwen3 output was faster, more consistent, and more user friendly. I would go for Qwen 3 for simple tasks as it understands nuances and requirements well.

---

### 2. Conway Game of Life

*(Skill Tested: Matrix logic, algorithm implementation, terminal rendering)*

Conway's Game of Life rules:
- Any live cell with fewer than two live neighbors dies (underpopulation).
- Any live cell with more than three live neighbors dies (overpopulation).
- Any live cell with two or three live neighbors continues to live.
- Any dead cell with exactly three live neighbors comes to life.

**Prompt:**
```
Create a Python implementation of Conway's Game of Life that runs in the terminal.
The program should accept an initial state, run for a specified number of generations,
and display each generation in the terminal.
```

![Game Of Life Patterns](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lbs1ike2uxwhja3j1pca.png)

**Result:** Qwen3 provided a sample test case automatically, making it easier to test the code with a single script. DeepSeek R1 required 2 files and had performance issues. **Qwen3 wins** for speed, reliability, and accuracy.

---

### 3. Butterfly SVG Generation

*(Skill Tested: SVG generation, geometric reasoning, visual symmetry)*

**Prompt:**
```
Generate SVG code for a simple butterfly shape.
The butterfly should have symmetrical wings and basic body parts (head, thorax, abdomen).
Use basic SVG shapes and keep the design relatively simple but recognizable.
```

**Qwen 3 Result:**

![Qwen3 SVG Results](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wp63xekw80cqfiz1itd3.png)

**DeepSeek R1 Result:**

![DeepSeek R1 SVG Results](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a4fq3linvge3hi4tb2sa.png)

Both models produced symmetric results, but Qwen3 was more nuanced in following instructions. **Qwen3 takes the lead** in the coding category.

---

## REASONING

### 1. Find The Guilty Person

*(Skill Tested: Deductive logic, truth-table consistency)*

**Prompt:**
```
A detective is investigating a case involving five suspects: Alice, Ben, Carla, David, and Eva.
Only one of them is guilty.
Alice says: "Ben is guilty."
Ben says: "Carla is lying."
Carla says: "Eva is guilty."
David says: "I didn't do it."
Eva says: "Carla is telling the truth."
Exactly one person is telling the truth. Who is guilty, and how do you know?
```

**Answer: David**

**Qwen 3:** Correctly identified David through a 4-step deduction process with structured output.

**DeepSeek R1:** Also correctly identified David — faster (80 seconds vs Qwen's 120+ seconds).

**Verdict:** Both correct. DeepSeek wins on speed; Qwen on structure.

---

### 2. Museum Field Trip Planning

*(Skill Tested: Constraint satisfaction, arithmetic reasoning, real-world planning)*

**Prompt:**
```
A group of students are planning a field trip to a museum.
Each bus can hold up to 40 students, the museum can only accommodate 120 students at a time.
Budget: $800 for bus rental. Each bus costs $200 per day.
How many buses should the group rent, how many students per bus, and the cost per day?
```

**Answer: 3 buses, 40 students each, $200 per bus per day**

Both models failed on the first try to include the per-day cost. On the second try, both got it right. DeepSeek was faster (95 seconds vs Qwen's 105 seconds) but Qwen's output structuring was superior.

---

## Conclusion

After extensive testing across Coding, Reasoning, Math, and Writing tasks:

- **Qwen3** is better for: coding tasks, UI generation, writing/summarization, structured output
- **DeepSeek R1** is better for: complex mathematical reasoning, speed-critical tasks

For most everyday development tasks, **Qwen3 is the recommended choice** — efficient, open-source, and remarkably capable.
