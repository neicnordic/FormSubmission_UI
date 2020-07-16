## Tryggve FE

This project consist of a front end interface to upload and fill .xsd schemas.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## WEBSITE EXPLICATION

The current website is in charge or creating XML files based on the provided XSD schemas. To do so, the XSD output has been structured in a JSON inside the schemas folder. In this section, the creation of form fields is explained together with the website flow.

The current application contains the components inside the components folder. The App.js is the root component which is injected in the root div of public/index.html file. Projecr main components and files are:

- XML_FORM: Component in charge of creating the forms, validate it's values and create the XML files.
- TagChild: Component in charge of representing a XML tag. Displays metadata (attributes of the XML), content  (text if is a XML text type) and childs if contains.
- Metadata: Component in charge of displaying the metadata of a XML tag.
- TagContent: Component in charge of displaying the input field. This input can be for a metadata attribute or a content of a tag. The types of contents are booleam or text.
- Schema folders: Folders containing, the XSD schema, and example of the XML and the JSON tree representing the XSD output and rules.


The application works with react-redux. APP logical state are handled  APP reducer and APP actions, whereas XML form state are under the XML actions and reducers.

As it is explained before, the component in charge of displaying the forms is XML_FORM component. This component is subscribed into to the XML store reducer, which gets the JSON form from the selected schema.

The XML schema is set once the user selects the desired tab from the navigationBar component. This component throws an action which is setSchema. Schemas and tabs MUST have the same name. setSchema action is a function which contains a switch that loads the tree from the schemas folder.

```

Each XML tag in the JSON tree is represented the following way:

{
    name:"TAG_NAME"
    content: TURE/FALSE  // depending if it contains text inside, ex: <A>some text</A>
    value: "" // if the tag has content, the value of its default content, by default should be ""
    placeholder:"" // If some information wants to be displayed in the form under the tag name
    childs: [{ ... }], // CHILDS OF THE TAG, if the actual tag doesn't contain any, don't add
    multiple: TRUE/FALSE // IF THIS TAG ALLOWS multiple childs 
    required: TRUE/FALSE // If the field is mandatory to create the XML 
    max: integer, // IF THIS TAG ALLOWS multiple childs 
    min:integer, // IF THIS TAG ALLOWS multiple childs 
    meta:{
        META_NAME:{ // the name of actual XML attribute
            value:"",// default value of the attribute
            placeholder:""// Information to be displayed in the input
        },
        {
            ...
        },
        ...
    }
}
```

## TODOS

- Finish validation of the fields. The components in charge are XML_FORM, TagChild, TagContent, Metadata. This is done by checking if the components with the flag required are filled.
- Add the possibility of creating multiple studies,....

## HOW TO RUN

1 - Make sure you have installed all dependencies listed in package.json with npm install;
2 - enter npm start to run the app locally;
3 - fill out the form and Submit (currently the Study object is the only one that works 100%).

The other types (Sample, Experiment, Analysis...) probably need some fixes inside
the respective json files in order to map their tag fields properly before submission.

THIS UI VERSION ONLY WORKS WITH THE DEVELOPMENT BRANCH OF THE BACKEND REPO. 