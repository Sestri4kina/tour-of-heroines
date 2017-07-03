import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb()  {
        const heroes = [
            { id: 11, name: 'Maria Goeppert Mayer', field: 'Physics', year: 1963, 
                description: `for their discoveries concerning nuclear shell structure` },
                { id: 12, name: 'Marie Curie, née Sklodowska', field: 'Physics', year: 1903, 
                    description: `in recognition of the extraordinary services they have rendered by their joint researches on the radiation phenomena discovered by Professor Henri Becquerel` },
                { id: 13, name: 'Ada E. Yonath', field: 'Chemistry', year: 2009, description: 'for studies of the structure and function of the ribosome' },
                { id: 14, name: 'Dorothy Crowfoot Hodgkin', field: 'Chemistry', year: 1964, description: 'for her determinations by X-ray techniques of the structures of important biochemical substances' },
                { id: 15, name: 'Irène Joliot-Curie', field: 'Chemistry', year: 1935, description: 'in recognition of their synthesis of new radioactive elements' },
                { id: 16, name: 'Marie Curie, née Sklodowska', field: 'Chemistry', year: 1911, description: 'in recognition of her services to the advancement of chemistry by the discovery of the elements radium and polonium, by the isolation of radium and the study of the nature and compounds of this remarkable element' },
                { id: 17, name: 'Youyou Tu', field: 'Physiology or Medicine', year: 2015, description: 'for her discoveries concerning a novel therapy against Malaria' },
                { id: 18, name: 'May-Britt Moser', field: 'Physiology or Medicine', year: 2014, description: 'for their discoveries of cells that constitute a positioning system in the brain' },
                { id: 19, name: 'Elizabeth H. Blackburn', field: 'Physiology or Medicine', year: 2009, description: 'for the discovery of how chromosomes are protected by telomeres and the enzyme telomerase' },
                { id: 20, name: 'Carol W. Greider', field: 'Physiology or Medicine', year: 2009, description: 'for the discovery of how chromosomes are protected by telomeres and the enzyme telomerase' },
                { id: 21, name: 'Françoise Barré-Sinoussi', field: 'Physiology or Medicine', year: 2008, description: 'for their discovery of human immunodeficiency virus' },
                { id: 22, name: 'Linda B. Buck', field: 'Physiology or Medicine', year: 2004, description: 'or their discoveries of odorant receptors and the organization of the olfactory system' },
                { id: 23, name: 'Christiane Nüsslein-Volhard', field: 'Physiology or Medicine', year: 1995, description: 'for their discoveries concerning the genetic control of early embryonic development' },
                { id: 24, name: 'Gertrude B. Elion', field: 'Physiology or Medicine', year: 1988, description: 'for their discoveries of important principles for drug treatment' },
                { id: 25, name: 'Rita Levi-Montalcini', field: 'Physiology or Medicine', year: 1986, description: 'for their discoveries of growth factors' },
                { id: 26, name: 'Barbara McClintock', field: 'Physiology or Medicine', year: 1983, description: 'for her discovery of mobile genetic elements' },
                { id: 27, name: 'Rosalyn Yalow', field: 'Physiology or Medicine', year: 1977, description: 'for the development of radioimmunoassays of peptide hormones' },
                { id: 28, name: 'Gerty Theresa Cori, née Radnitz', field: 'Physiology or Medicine', year: 1947, description: 'for their discovery of the course of the catalytic conversion of glycogen' }
        ];

        return {heroes};
    }
}