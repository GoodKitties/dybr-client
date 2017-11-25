## Running Styleguide

This styleguide is using [react-styleguidist](https://github.com/styleguidist/react-styleguidist). After cloning the project and `npm i` inside of it, you could run the dev server with the interactive styleguide by running this command:

``` sh static
npm run styleguide
```

And then opening its local address in your browser (by fefault — http://localhost:6060/).

## Which components are shown there?

Only the components that have a specific file structure would be shown in this styleguide: the component should have its own directory with its code placed in its `index.js`. Then, there should be `Readme.md` inside this component's folder with all the corresponding docs. You could place any includes, local tests etc. right along this component, all of this makes it really easy to understand what goes into any specific component.

## Using styled-components

All the components for the UI should be done using styled-components. The example `index.js` for a component could look like this:

``` js static
import bemto from 'bemto-components';
import styled from 'styled-components';

const Block = styled(bemto())`
  border: 1px solid;

  &_big {
    font-size: 2em;
  }
`;

Block.Element = styled(bemto())`
  padding: 10px;
  background: blue;

  ${Block}:hover > & {
    background: lime;
  }

  ${Block}_big > & {
    padding: 25px;
  }
`;

/** @component */
export default Block;
```

After doing so and importing later this component, you could use it like this in JSX:

``` xml static
<Block _big className='additional-classname'>
  <Block.Element>Foo</Block.Element>
  <Block.Element title='Bar’s title'>Bar</Block.Element>
</Block>
```

A few things to note:

1. You could see how we can add BEM-like “Elements” for our components: just by adding them as properties to our component. This would allow us to use those elements whenever we export our components, so they essentially become a part of components' API.

2. I've used there also a thing used `bemto-components`: you can see it used instead of a tag for styled-components: `.styled(bemto())` — what it does is it enables us to use BEM-like modifiers for our components! That means that we can just write `<Block _big>` and it would generate a modifier for our component based on its generated className, so we could then just use `&_big` at component's CSS and get the expected result.

    And another thing bemto-components allows us to do: create polymorphic components that could be rendered as different HTML tags based on which props/attributes they were called with. For example, we can have buttons that are `<button>` by default, but as soon as we pass `href` to them, they could become `<a>`. That can be really useful in a lot of cases.

2. You can use the `${Block}` interpolation to use any other component (or parent blocks) as part of the CSS selectors. Styled-components are smart enough to get the generated className and apply it there.

3. Styled-components would pass all the props/attributes to the generated HTML of components, so its really easy to add any extra classNames or attributes like `title` to your components when you call them.

4. When you export your component you need to declare that you export it as component: `/** @component */`, this is needed so Styleguidist would understand that it is a component that could be displayed at the styleguide.

- - -

*Disclaimer:* This is just an example of Styleguidist, components below are there to just demonstrate how they're used. We can start adding our proper components there when we'd have then, or convert existing ones to the ones that we could display at styleguide. This would make it so we'd need to separate the UI part of the component from its logic, and that is a really nice thing in styleguide-driven development! Enjoy!
