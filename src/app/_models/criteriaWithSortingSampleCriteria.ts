/**
 * SORMAS REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.64.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SampleCriteria } from './sampleCriteria';
import { SortProperty } from './sortProperty';

export interface CriteriaWithSortingSampleCriteria {
  criteria?: SampleCriteria;
  sortProperties?: Array<SortProperty>;
  caseCriteria?: SampleCriteria;
}