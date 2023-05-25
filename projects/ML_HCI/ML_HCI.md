### Deep Learning for Music and Human-Computer Interaction

#### Overview

This project began as part of my postdoctoral research exploring Automated Music Synthesis at the Department of Electrical and Electronic Engineering at Trinity College Dublin. The project investigated methods for integrating machine learning and deep learning techniques (ML/DL) into the electronic music production and performance pipelines.  

#### Phase 1: Machine Learning for Music Generation

##### LSTM Architectures
Initial work focused on music production applications, specifically music generation at the MIDI event level. The models used Long short-term memory (LSTM) type architectures (using recurrent neural networks or RNNs) implemented with Tensorflow (Keras in Python). This allowed for the generation of new musical materials using features learned from an input MIDI data set. A variety of models were created in this way, some focusing on specific instruments and others focusing on specific artists and styles. The models developed for melody and harmony are generally focused on patterns at the note and chord levels.

<img src="images/model_def_py.png?raw=true"/><br/>

##### Data set
To assemble the training data for initial experiments, I acquired a large number of MIDI files from a range of online sources. These experiments explored several musical genres/styles. The MIDI files were cleaned and split into sub-files on the basis of instrumentation etc. They were then mapped to integer values (with MIT's [Music21 toolkit](https://web.mit.edu/music21/)) so that a one-hot encoding scheme could be applied.

##### Overview 
For training, data is split into n-length musical sequences. Each sequence is then paired with its following sequence element: n+1. This conditions the network to predict the next element for a given n-length sequence provided to it at prediction/generation time.

##### Results 
While the models were effective, the musical outputs were, unsurprisingly, heavily tied to and constrained by the training data. Instances of direct replication and interpolation were obvious, though I addressed issues of overfitting with dropout layers. Extrapolation over musical materials tended to progress in a predictable manner. While a testament to the power of the techniques involved, this approach alone isn't a sufficient method for generating interesting musical materials. More interesting outputs can be obtained by varying the input data set, the model architecture, and the hyperparameters of the model.
These approaches can then be integrated into a larger music production pipeline to create interesting music. You can hear examples of this approach below. Relevant models created during this phase were the KennyG_ENERATOR and DefLSTM.

#### Phase 1 Outputs: 30 Epoch Opus

30 Epoch Opus, is a short EP of AI-driven music. It features 4 musical works in diverse styles. The harmonic materials (melodies and harmonies) for each piece were composed using deep learning models both of which had an LSTM-based architecture.

The models were trained on MIDI renderings of the tracks from Def Leppard's 1987 classic Hysteria. However, I couldn’t find a good version of the song Excitable so I used Photograph instead. Although that track appears on the 1984 album Pyromania, it shares a similar aesthetic to the tracks on Hysteria. The models were specifically trained on the guitar and bass lines with singing and drum information removed.

The instruments and timbres that have been chosen to synthesize (or sound out) these materials were provided by the composer rather than either of the models. Instead, 4 distinct approaches to texture and timbre were employed, 3 of which involve the manipulation of samples to some degree while the fourth approach involved modal synthesis. The result is 4 pieces with markedly different sonic palettes spanning electronic, noise, and pseudo-contemporary styles.

To create interesting harmonic/melodic results, the model used for the first 3 tracks is left partially underfit and uses highly novel input data chosen for its originality. This underfitting allows some features present in the original data to “shine through” but prevents the material from becoming an overly generalised representation of the inputs. This leaves space for an element of chance and surprise in the output. The model architecture and hyperparameters have been selected to support this approach. The model used for the fourth track, 100 Epoch Opus, is a much better fit for its training data. The originality of the harmonic materials here stems from a process of trial and error where a large number of outputs were auditioned before the novel material presented itself.

<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=951154666/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://stephenroddy.bandcamp.com/album/30-epoch-opus">30 Epoch Opus by Stephen Roddy</a></iframe>

##### Further Steps 
This initial work was followed with the development of a GAN-based system but the long training times involved made this approach less useful than the LSTM systems for generating musical materials as part of a traditional music production workflow. The LSTM systems described above were easily integrated with Python notebooks allowing for better control and interaction when running in cloud computing environments during a standard music production workflow. I also explored the application of MusicVAE, which originated with Google's [Magenta Project](https://magenta.tensorflow.org/), which proved tricky to re-train on-the-fly during the production workflow. Regardless, I did make use of both of these approaches in other projects:

- [Signal to Noise Loops](https://stephenroddy.github.io/projects/s2nl/s2nl_project)
- [Indices Online](https://stephenroddy.github.io/projects/indices/indices_audio)

#### Phase 2 ML for Live Performance & Installation 

The second phase of the project explored computer vision (CV) and ML techniques for gestural control of performance systems (UAVs: drones, and music/sound synthesis). My colleagues and I at the Department of Electrical and Electronic Engineering TCD, designed and built a gestural control interface that could be used to control the flight of a drone.
The hardware required to communicate with the drone was designed and built by a colleague. I built the system gestural interface system HTML, Javascript, and Node.js and used the tone.js, p5.js, ml5.js libraries. 
This interface was integrated with a hardware setup in which an Arduino was used to control the RC device for the drone.
The system allowed users to control the flight path of a drone through their hand movements. The users' hand movements are captured via camera/webcam and analysed using the ml5js [Posenet](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5) implementation. These hand movements were also sonified, converting the user interactions into musical sounds (tone.js) and mapped to control the animation of the drone on a computer screen. The system was installed and opened to the members of the public during Trinity College Dublin's 2019 Open Day.

<img src="images/Drone Project.gif?raw=true"/><br/>
- [More on youtube](https://youtu.be/nK5spkN2TOA)

##### Gestural Control of Sound Synthesis
Phase 3 of this project is still ongoing. It aims to integrate work carried out in the first two phases of the project. I have adapted the gestural control system I designed during phase 2 to control the parameters of different sound synthesis routines. While phase 1 of the project was exploratory in nature and phase 2 was centred around developing a workable application, I have adopted a standard iterative development style in phase 3. This return to a structured HCI style research and development model is resulting in the production and refinement of a series or prototypes for the gestural control of sound synthesis parameters.

You can experience a stable prototype of these here.
To use the prototypes stand in front of your webcam and move your hands to control sonic and visual parameters:

- [Prototype 2: Gestural Control of Sound Synthesis](https://stephenroddy.github.io/projects/ML_HCI/web_apps/Gesture_Synthesis/index.html)
- [Prototype 1: Animated Drone](https://stephenroddy.github.io/projects/ML_HCI/web_apps/Gesture_Drone/index.html)



<!--
### Creative Skills
Music Compostion. Sound Design. Creative Computing. HCI & Interaction Design. UX Design. Visual Design. Interface Design.

### Technical & Research Skills
 Machine Learning. Deep Learning. Keras. Music21. MIDI. HTML/CSS/Javascript. Python. Computer Vision. Sound & Music Computing. Serial. Data Analysis. Audio Engineering. Audio DSP. Sound Synthesis. Data Analysis. User Evaluation.
-->

### Tags
Human-computer Interaction. Gestural Interfaces. Machine Learning. Music. Embodied Cognition. Stephen Roddy.


<!--
<iframe src="https://editor.p5js.org/roddyst/embed/3LK9dABOj"></iframe>

[Link: https://editor.p5js.org/roddyst/present/3LK9dABOj](https://editor.p5js.org/roddyst/present/3LK9dABOj)

<iframe src="https://editor.p5js.org/roddyst/embed/sAdryDYz1"></iframe>

//Notes:


1. Talk about the original designs.
  - Show the screen shots.
  - Talk about how they were designed for the wrong interaction type.
    w/buttons etc.
  - Introduce the final prototype idea.
  - Demonstrate the working prototype for the multiple synthesis types I've already created it for.


1. Upload the Interface for AM Synthesis.
2. Upload the Interface for FM Synthesis.

1. Talk about the original project elements with the machine learning training for musical models that I did.
2. Then talk about the pivot over to controlling Drones.
3. Then cover the movement from drones to sound synthesis.
-->
