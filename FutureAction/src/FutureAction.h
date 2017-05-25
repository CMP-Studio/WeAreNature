#pragma once

struct FutureAction {
  enum Scope { ME, WE };
  
  FutureAction(string name, string description, Scope scope):
    name(name),
    description(description),
    scope(scope){}
  
  FutureAction(string name, string description, Scope scope, string organization):
    name(name),
    description(description),
    scope(scope),
    organization(organization){}
  
  string name;
  string description;
  Scope scope;
  string organization;
};
