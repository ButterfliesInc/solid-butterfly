// just because you are a contact, doesn't make you a friend
type Type = 'Personal' | 'Work'

type PhoneNumber = {
  number: string
  type: Type
  primary: boolean
}
type Email = {
  email: string
  type: Type
  primary: boolean
}

// right now just US, but in future need to define based on country...
type Address = {
  street1: string
  street2: string
  city: string
  postal: string
  state: string
  country: string
  type: Type
  primary: boolean
}

type ContactType = 'Family' | 'Friend' | 'Co-Worker'
export interface Contact {
  firstName: string
  lastName: string
  phone: PhoneNumber[]
  email: Email[]
  address: Address
  groups: string[]
  roles: string[]
  socialMediaAccounts: string[]
  organizations: string[]
  contactType: ContactType
}




// https://blog.logrocket.com/types-vs-interfaces-typescript/#:~:text=In%20summary%2C%20interfaces%20will%20detect,type%20aliases%20should%20be%20used.
/* Types - Can't conditionals or unions with an interface
type Car = 'ICE' | 'EV';
type ChargeEV = (kws: number)=> void;
type FillPetrol = (type: string, liters: number) => void;
type RefillHandler<A extends Car> = A extends 'ICE' ? FillPetrol : A extends 'EV' ? ChargeEV : never;
const chargeTesla: RefillHandler<'EV'> = (power) => {
    // Implementation for charging electric cars (EV)
};
const refillToyota: RefillHandler<'ICE'> = (fuelType, amount) => {
    // Implementation for refilling internal combustion engine cars (ICE)
};
*/
/* Interfaces do Declaration merging. you can use the 
same name for an interface and the compiler will simply extend

Common Use
When used in the right places, declaration merging can be very useful. 
One common use case for declaration merging is to extend
 a third-party library’s type definition to fit the needs of a particular project.*/

 /* Notes: 
 
 In a nutshell, both interfaces and type aliases can be extended. An interface can extend a
  statically known type alias, while a type alias can extend an interface using an intersection operator.

  In summary, interfaces will detect property or method name conflicts at compile time and 
  generate an error, whereas type intersections will merge the properties or methods 
  without throwing errors. 
  Therefore, if we need to overload functions, type aliases should be used
  */

  /*
  types can have tuble types 
  
  type TeamMember = [name: string, role: string, age: number];

  interfaces have a workaround 
  
  interface ITeamMember extends Array<string | number> 
{
 0: string; 1: string; 2: number 
}

const peter: ITeamMember = ['Harry', 'Dev', 24];
const Tom: ITeamMember = ['Tom', 30, 'Manager']; //Error: Type 'number' is not assignable to type 'string'.

  */
 /* Advanced type features
 TypeScript provides a wide range of advanced type features that can’t be found in interfaces. Some of the unique features in TypeScript include:

Type inferences: Can infer the type of variables and functions based on their usage. This reduces the amount of code and improves readability
Conditional types: Allow us to create complex type expressions with conditional behaviors that depend on other types
Type guards: Used to write sophisticated control flow based on the type of a variable
Mapped types: Transforms an existing object type into a new type
Utility types: A set of out-of-the-box utilities that help to manipulate types
TypeScript’s typing system constantly evolves with every new release, making it a complex and powerful toolbox. The impressive typing system is one of the main reasons many developers prefer to use TypeScript.
*/

/* wehn you shoudl use interfaces
While almost all interface features are available in types or have equivalents, one exception is declaration merging. Interfaces should generally be used when declaration merging is necessary, such as extending an existing library or authoring a new one. Additionally, if you prefer the object-oriented inheritance style, using the 
extends keyword with an interface is often more readable than using the intersection with type aliases.
*/