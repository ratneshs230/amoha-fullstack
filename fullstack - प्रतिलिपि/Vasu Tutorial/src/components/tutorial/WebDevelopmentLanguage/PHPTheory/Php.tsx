import React, { useState } from 'react';
// Import Layout
import Layout from './Layout.tsx';
// Import sidebar data
import { sidebarItems } from './SidebarData.ts';

// Import topic components
import PHPIntroduction from './Topic/intro.tsx';
import PHPInstallation from './Topic/phpInstall.tsx';
import PhpSyntax from './Topic/phpSyntax.tsx';
import PHPComments from './Topic/phpComments.tsx';
import PhpVariables from './Topic/variables.tsx';
import PHPOutputTutorial from './Topic/echoPrint.tsx';
import PhpDataTypes from './Topic/DataTypes.tsx';
import PhpStrings from './Topic/strings.tsx';
import PHPNumbers from './Topic/number.tsx';
import PhpCasting from './Topic/casting.tsx';
import PHPMathFunctions from './Topic/math.tsx';
import PhpConstants from './Topic/contsants.tsx';
import PHPOperators from './Topic/operators.tsx';
import PhpArrays from './Topic/arrays.tsx';
import PHPFunctions from './Topic/functions.tsx';
import PhpLoops from './Topic/loops.tsx';
import PHPIfStatements from './Topic/ifElseElseif.tsx';
import PhpSwitch from './Topic/switch.tsx';
import SuperGlobals from './Topic/superGlobals.tsx';
import PHPRegEx from './Topic/regEx.tsx';
import PhpMagicConstants from './Topic/magicConstants.tsx';

// PHP Forms
import PhpFormHandling from './Topic/formHandling.tsx';

// PHP OOP
import PHPOOP from './Topic/phpOOP.tsx';
import PHPOOPClasses from './Topic/classesObjects.tsx';
import PHPOOPConstructor from './Topic/OOPConstructor.tsx';
import PHPOOPDestructor from './Topic/OOPDestructor.tsx';
import PHPOOPAccessModifiers from './Topic/OOPAccessmodifiers.tsx';
import PHPInheritance from './Topic/inheritance.tsx';
import PHPOOPConstants from './Topic/OOPconstant.tsx';
import PHPAbstractClasses from './Topic/OOPAbstractClasses.tsx';
import PHPInterfaces from './Topic/OOPinterfaces.tsx';
import PHPTraits from './Topic/OOPTraits.tsx';
import PHPStaticMethods from './Topic/OOPStaticMethods.tsx';
import PHPStaticProperties from './Topic/OOPStaticProperties.tsx';

// MySQL Database
import PhpMySqlTutorial from './Topic/phpMySqlDb.tsx';
import PhpMysqlConnectionTutorial from './Topic/phpMySqlConnect.tsx';
import PhpMySqlCreateDb from './Topic/phpMySqlCreateDb.tsx';
import PhpMySqlCreateTable from './Topic/phpMySqlCreateTable.tsx';
import PhpMySqlInsertData from './Topic/phpMySqlInsertData.tsx';

// PHP Advanced
import PHPDateTime from './Topic/dateandtime.tsx';
import PHPIncludeFiles from './Topic/include.tsx';
import PHPFileHandling from './Topic/fileHandling.tsx';

// Map topic keys (from SidebarData) to actual components
const topicComponents: { [key: string]: React.FC } = {
  // Basic PHP Topics
  'php-home': PHPIntroduction,
  'intro': PHPIntroduction,
  'install': PHPInstallation,
  'syntax': PhpSyntax,
  'comments': PHPComments,
  'variables': PhpVariables,
  'echo-print': PHPOutputTutorial,
  'php-data-types': PhpDataTypes,
  'php-strings': PhpStrings,
  'php-numbers': PHPNumbers,
  'php-casting': PhpCasting,
  'php-math': PHPMathFunctions,
  'php-constants': PhpConstants,
  'php-operators': PHPOperators,
  'php-arrays': PhpArrays,
  'php-functions': PHPFunctions,
  'php-loops': PhpLoops,
  'php-if-else': PHPIfStatements,
  'php-switch': PhpSwitch,
  'php-superglobals': SuperGlobals,
  'php-regex': PHPRegEx,
  'php-magic-constants': PhpMagicConstants,

  // PHP Forms
  'php-forms': PhpFormHandling,
  'php-form-handling': PhpFormHandling,

  // PHP OOP
  'php-oop': PHPOOP,
  'php-oop-intro': PHPOOP,
  'php-classes-objects': PHPOOPClasses,
  'php-constructor': PHPOOPConstructor,
  'php-destructor': PHPOOPDestructor,
  'php-access-modifiers': PHPOOPAccessModifiers,
  'php-inheritance': PHPInheritance,
  'php-oop-constants': PHPOOPConstants,
  'php-abstract-classes': PHPAbstractClasses,
  'php-interfaces': PHPInterfaces,
  'php-traits': PHPTraits,
  'php-static-methods': PHPStaticMethods,
  'php-static-properties': PHPStaticProperties,

  // MySQL Database
  'php-mysql': PhpMySqlTutorial,
  'mysql-database': PhpMySqlTutorial,
  'mysql-connect': PhpMysqlConnectionTutorial,
  'mysql-create-db': PhpMySqlCreateDb,
  'mysql-create-table': PhpMySqlCreateTable,
  'mysql-insert': PhpMySqlInsertData,

  // PHP Advanced
  'php-advanced': PHPDateTime,
  'php-date-time': PHPDateTime,
  'php-include': PHPIncludeFiles,
  'php-file-handling': PHPFileHandling,
};

interface MainApplicationProps {
  darkMode?: boolean;
}

const MainApplication: React.FC<MainApplicationProps> = ({ darkMode: _darkMode }) => {
  // Initialize 'selected' with the first sidebar item's component key
  const [selectedTopic, setSelectedTopic] = useState<string>(
    sidebarItems[0]?.component || 'Overview'
  );

  const handleSelectTopic = (componentKey: string) => {
    setSelectedTopic(componentKey);
  };

  // Dynamically get the selected Component
  const CurrentComponent = topicComponents[selectedTopic];

  return (
    <div className="MainApplication">
      <Layout selected={selectedTopic} onSelect={handleSelectTopic}>
        {CurrentComponent ? (
          <CurrentComponent />
        ) : (
          <div className="text-center p-10 text-xl text-red-500">
            Topic content not found for "{selectedTopic}".
          </div>
        )}
      </Layout>
    </div>
  );
};

export default MainApplication;
