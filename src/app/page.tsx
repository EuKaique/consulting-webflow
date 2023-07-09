import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

import './home.css';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <h2 className="title-class">Color</h2>
      <div className="flex justify-evenly w-11/12 pl-24">
        <div>
          <div className="green-div"></div>
          <span className="text-normal font-semibold pl-9">#40DDB6</span>
        </div>
        <div>
          <div className="purple-div"></div>
          <span className="text-normal font-semibold pl-9">#6B78E5</span>
        </div>
        <div>
          <div className="black-div"></div>
          <span className="text-normal font-semibold pl-9">#37393F</span>
        </div>
        <div>
          <div className="grey-div"></div>
          <span className="text-normal font-semibold pl-9">#7D7D7D</span>
        </div>
        <div>
          <div className="light-div"></div>
          <span className="text-normal font-semibold pl-9">#F4F4F4</span>
        </div>
      </div>

      <h2 className="title-class">Typography</h2>
      <div className="typography-class">
        <h1>Heading H1 Title</h1>
        <h2>Heading H2 Title</h2>
        <h3>Heading H3 Title</h3>
        <h4>Heading H4 Title</h4>
        <h5>Heading H5 Title</h5>
        <h6>Heading H6 Title</h6>
      </div>

      <h2 className="title-class">Paragraph</h2>
      <div className="paragraph-class">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
          containing Lorem Ipsum passages, and more recently with.
        </p>
      </div>

      <h2 className="title-class">Lists</h2>
      <div className="list-class">
        <ul>
          <li>The printing and typesetting industry.</li>
          <li>Lorem Ipsum has been the industry's standard</li>
          <li>It has survived not only five centuries.</li>
        </ul>
        <ol>
          <li> The printing and typesetting industry.</li>
          <li> Lorem Ipsum has been the industry's standard</li>
          <li> It has survived not only five centuries.</li>
        </ol>
      </div>

      <h2 className="title-class">Blockquotes</h2>
      <div className="blockquotes-class">
        <p>
          The job market of the future will consist of those jobs that robots cannot perform. 
          Our blue-collar work is pattern recognition, making sense of what you see. 
          Gardeners will still have jobs because every garden is different. 
          The same goes for construction workers. The losers are white-collar workers, low-level accountants, 
          brokers, and agents.
        </p>
      </div>

      <h2 className="title-class">Button</h2>
      <div className="button-class">
        <div>Button Default</div>
        <div>Button Default</div>
        <div>Button Default</div>
        <div>Button Default</div>
      </div>
    </main>
  )
}
