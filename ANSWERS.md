- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to catch any errors in our code by making sure the data that were passing around is of the correct type. For example, if we wanted to type check certain object properties in our array to make sure they were of the right type(string, numbers…), PropTypes would allow us to check and provide a warning message if the data type we were passing down was incorrect.


- [ ] Describe a life-cycle event in React?

A life-cycle event happens when a component goes through a “birthing” phase —-this is usually when a component is initiated and mounted, then it goes through a  “growth” or updating phase, and finally the “death” or un-mounting phase—-this is usually when things like event listeners  or the type are removed from the component. Built in React functions allow us to run function upon these lifecycle events.


- [ ] Explain the details of a Higher Order Component?

A HOC is a component that takes a component as its argument and returns a new component.


- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

Vanilla CSS, stylized-components, ReactStrap, Bootstrap… the benefits are  that some allow you to tap into third party React library and receive prebuilt design components such as buttons to add into your application, and others(like Vanilla CSS) allow you to have more tighter control over how your component is designed. This does take up more development time than importing directly from a React library. However, the best use case is dependent on the project and timeline, but generally (imo) having a hybrid approach to styling components works best.
